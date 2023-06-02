
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./delegatee-lists.cjs.production.min.js')
} else {
  module.exports = require('./delegatee-lists.cjs.development.js')
}
