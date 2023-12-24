import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/PopDeleteArticle.jsx'
import App2 from './assets/PopLogOut.jsx'
import App3 from './assets/Card.jsx'
import artciles from './assets/articles.json'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App3 articles={artciles}/>
  </React.StrictMode>,
)
