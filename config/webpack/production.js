process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.PORT = process.env.PORT || 3000
const environment = require('./environment')

module.exports = environment.toWebpackConfig()
