import { Button } from "@mui/material";
import "./UploadFile.less";
import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {useSignContext} from '@context'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const UploadFile = () => {
  const {fileSrc, setFileSrc} = useSignContext()
  const canvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(false);
  const [canvas, setCanvas] = useState(null);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const c = canvasRef.current;
    setCanvas(c);
    if (c) {
      setCtx(c.getContext("2d"));
    }
  }, [canvasRef]);

  const handleUploadPdf = (event) => {
    const file = event.target.files[0];
    if (file.type === "application/pdf") {
      let fileReader = new FileReader();
      fileReader.onload = function () {
        const pdfData = new Uint8Array(this.result);
        // Using DocumentInitParameters object to load binary data.
        const loadingTask = pdfjs.getDocument({ data: pdfData });
        loadingTask.promise.then(
          function (pdf) {
            console.log("PDF loaded");
            // Fetch the first page
            const pageNumber = 1;
            pdf.getPage(pageNumber).then(function (page) {
              console.log("Page loaded");

              const scale = 0.4;
              const viewport = page.getViewport({ scale: scale });

              // Prepare canvas using PDF page dimensions
              canvas.height = viewport.height;
              canvas.width = viewport.width;
              // Render PDF page into canvas contexts
              const renderContext = {
                canvasContext: ctx,
                viewport: viewport,
              };
              const renderTask = page.render(renderContext);
              renderTask.promise.then(function () {
                console.log("Page rendered");
              });
            });
          },
          function (reason) {
            // PDF loading error
            console.error(reason);
          }
        );
      };
      setFileSrc(file)
      setImageSrc(true);
      fileReader.readAsArrayBuffer(file);
    } else {
      const ctx = canvasRef.current.getContext("2d");
      const img = new Image();
      img.onload = function () {
        const scale = 0.5
        // scale canvas to image
        ctx.width = 300;
        ctx.height = 1000*scale;
        // draw images
        ctx.drawImage(img, 0, 0, ctx.width, ctx.height);
      };
      setFileSrc(file)
      setImageSrc(true);
      img.src = URL.createObjectURL(file);
    }
  };


  return (
    <section className="uploadSection">
      <div className="descriptionSection">
        <ul>
          <li>檔案格式須為PDF或IMG</li>
          <li>檔案大小上限為10MB</li>
        </ul>
        <div className="descriptionBtn">
          <label for="upload">上傳文件</label>
          <input
            onChange={handleUploadPdf}
            style={{ opacity: 0 }}
            type="file"
            id="upload"
            name="upload"
            accept=".jpg, .jpeg, .png, .pdf"
          />
        </div>
      </div>
      <div className="fileSection">
        {!imageSrc && <h4>文件顯示區</h4>}
        <canvas ref={canvasRef} height={400} width={300}></canvas>
      </div>
    </section>
  );
};

export default UploadFile;
