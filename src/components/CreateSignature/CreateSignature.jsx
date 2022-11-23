import React, { useRef, useState, useEffect, useCallback } from "react";
import "./CreateSignature.less";
import Canvas from "@components/Canvas/Canvas";
import { Modal, Button } from "@mui/material";
import { useSignContext } from "@context";

const CreateSignature = () => {
  const {showClearBtn, clearCanvas, handleConvertToImage, signSrc } = useSignContext();
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState([]);

  const fetchImage = () => {
    const src = JSON.parse(localStorage.getItem("signature"));
    setImageSrc(src);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <section className="createSection">
      <div className="createDescription">
        <h4 className="writeSignature">請在此寫下您的簽名</h4>
        <h4 className="writeSignature">或</h4>
        <h4 className="getSignature" onClick={handleOpen}>
          從簽名檔中獲取簽名
        </h4>
      </div>
      <Canvas />
      {showClearBtn && (
        <div className="clearBtnSection">
          <Button className="clearBtn btn" onClick={clearCanvas}>清除</Button>
          <Button className="saveBtn btn" onClick={handleConvertToImage}>儲存</Button>
        </div>
      )}
      <Modal open={open} onClose={handleClose}>
        <div className="signatureModal">
          <h2 className="modalTitle">我的簽名檔</h2>
          <div className="historySignature">
            {imageSrc &&
              imageSrc.map((image) => (
                <div key={image.id} className="picSection">
                  <div className="uploadPic">
                    <img src={image.image} alt={""} />
                  </div>
                  <Button className="chooseBtn">選擇</Button>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default CreateSignature;
