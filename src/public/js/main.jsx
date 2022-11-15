import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Router from '../../routes/commonRoutes'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={'loading'}>
      <Router/>
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
 