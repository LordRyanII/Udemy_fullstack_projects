exports.middlewareGlobal = (req, res, next) => {
    res.locais.umaVariavelLocal = 'Este é valor da variável local.'
    return next();
};

exports.outroMiddleware = (req, res, next) => {
    next()
}