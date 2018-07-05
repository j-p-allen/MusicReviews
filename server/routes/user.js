const userController = require('./../controllers/user.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {

    router
        .route('/user/register')
        .post(userController.registerUser)

    router
        .route('/user/login')
        .post(userController.loginUser)
}
