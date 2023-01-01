function generateUrl() {

  const data = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  collection = data.split('')

  let password = ''

  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * 62)
    password += collection[index]

  }
  const url = 'localhost:3000/' + password

  return url
}

module.exports = generateUrl
