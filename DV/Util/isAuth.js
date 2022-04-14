module.exports = (request, response, next) => {
    if (!request.session.isLoggedIn) {
        return response.status(404).redirect('/users/Login');
    }
    next();
}