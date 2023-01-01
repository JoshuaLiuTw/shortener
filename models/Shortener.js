const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shortenerSchema = new Schema({
  originalUrl: {
    type: String // 資料型別是字串

  },
  shortenUrl: {
    type: String

  }
})

module.exports = mongoose.model('Shortener', shortenerSchema)