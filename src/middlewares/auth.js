module.exports = function isAuthorized(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).json({ message: "Cadê a credencial?" });
        return false;
    }
    return next();
}