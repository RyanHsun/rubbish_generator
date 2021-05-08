const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const helpers = require('handlebars-helpers')()
const generatorRubbish = require('./rubbish_generator')

const app = express()
const port = 3000


// 設定 handlebars 
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


// 設定 Body-Parser
app.use(bodyParser.urlencoded({ extended: true }))

// 使用靜態檔案
app.use(express.static('public'))

// 設定路由
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const target = req.body.target
  const rubbish = generatorRubbish(target)
  res.render('index', { rubbish,  target })
})

app.listen(port, (req, res) => {
  console.log(`The server is listening on http://localhost:${port}`)
})