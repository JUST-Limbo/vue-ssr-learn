const express = require('express');

const Vue = require('vue');

const app = express()

const renderer = require('vue-server-renderer').createRenderer();

const page = new Vue({
  template: `
  <div>
    <div>hello ssr</div>
    <h1>{{title}}</h1>
  </div>`,
  data: {
    title: 'abc'
  }
})

app.get('/', async (req, res) => {
  try {
    const html = await renderer.renderToString(page)
    res.send(html)
  } catch (error) {
    res.status(500).send('server error')
  }
})

app.listen(3000, () => {
  console.log('server running')
})
