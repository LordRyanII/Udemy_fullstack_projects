module.exports.meuMiddleware = (req, res, next) => {
    if(req.body.cliente === req.body.includes('Menezes')){
        return console.log('Error')
    }
}