import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'

interface Render {
  html: string,
}

export function render(): Render {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  return { html }
}
