const omitEmpty = require('omit-empty')

module.exports = function (api, headingSelector) {
  var $ = api.$
  const helpers = require('../helpers')(api)

  return $(headingSelector)
    .nextUntil('h2')
    .filter(helpers.h3)
    .map((i, el) => {
      var match = $(el).find('code').text().match(/.*\.(\w+)(.*)/)

      if (!match) return api.addError('method', $(el).html())

      var method = {
        name: match[1],
        signature: match[2],
        platforms: $(el).getPlatforms(),
        description: $(el).getDescription(),
        arguments: $(el).getArguments(api)
      }
      return omitEmpty(method)
    })
    .get()
}