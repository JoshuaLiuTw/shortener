const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose') // 載入 mongoose
const Shortener = require('./models/Shortener') // 載入 Shortener model
const generateUrl = require('./shortener') // 載入 shortener


// 加入這段 code, 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})




const port = 3000
app.use(express.urlencoded({ extended: true }))


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:shortenUrl', (req, res) => {
  const shortenUrl = 'localhost:3000/' + req.params.shortenUrl
  Shortener.findOne({ shortenUrl })
    .lean()
    .then((url) => res.redirect(url.originalUrl))
    .catch(error => console.log(error))

})

app.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl
  const shortenUrl = generateUrl(originalUrl)

  return Shortener.findOne({ originalUrl })
    .then((result) => {
      if (result) {//資料庫有該筆資料
        
        res.render('index')

      } else {//找不到資料庫有該筆資料
        return Shortener.create({ originalUrl, shortenUrl })     // 存入資料庫
          .then((data) => res.render("index", { shortUrl:data.shortenUrl }))
          .catch(error => console.log(error))
      }

    })
    .catch(error => console.log(error))
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})