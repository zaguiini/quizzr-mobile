/* eslint-disable @typescript-eslint/no-var-requires */
var upstreamTransformer = require('metro-react-native-babel-transformer')

var svgTransformer = require('react-native-svg-transformer')
var tsTransformer = require('react-native-typescript-transformer')

module.exports.transform = function({ src, filename, options }) {
  if (filename.endsWith('.ts') || filename.endsWith('.tsx')) {
    return tsTransformer.transform({ src, filename, options })
  } else if (filename.endsWith('.svg')) {
    return svgTransformer.transform({ src, filename, options })
  }

  return upstreamTransformer.transform({ src, filename, options })
}
