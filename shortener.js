function sample(array) {

  const index = Math.floor(Math.random() * 62)
  return array(index)

}

function generateUrl() {

  const data = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  collection = data.split('')

  let password = ''

  for (let i = 0; i < 5; i++) {

    password += sample(collection)

  }
  const url = 'localhost:3000' + password

  return url
}
