const slm = require('slm')
const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const options = Object.assign({
    filename: this.resourcePath,
    doctype: 'html',
    compileDebug: this.debug || false
  }, loaderUtils.getOptions(this))

  const template = slm.compile(source, options)
	// console.log(template)
  return template(options.data || {})
}