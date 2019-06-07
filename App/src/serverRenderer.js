/* eslint-disable no-unused-vars */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import { ChunkExtractor } from '@loadable/server'
import {path} from 'path'
import {App} from './App';
import {store} from './client'

const statsFile = path('dist/loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile })


function renderHTML(html) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>The app</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/js/main.js"></script>
          ${extractor.getScriptTags()}
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    let appStore = store;

    const root = (
      <Provider store={appStore}>
        <StaticRouter>
          <App />
        </StaticRouter>
      </Provider>
    );

    const jsx = extractor.collectChunks(root)

    const htmlString = renderToString(jsx);

    const scriptTags = extractor.getScriptTags()
    const linkTags = extractor.getLinkTags()
    const styleTags = extractor.getStyleTags()

    res.send(renderHTML(htmlString));
  };
}