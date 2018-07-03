const post = require('./post')
const user = require('./user')

module.exports = (router) => {
    post(router)
    user(router)
}