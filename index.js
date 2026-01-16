'use strict'

module.exports = function (registry) {
  if (typeof registry !== 'string') {
    throw new TypeError('`registry` should be a string')
  }
  try {
    // Remove default ports (80 for HTTP, 443 for HTTPS) to ensure consistency
    registry = new URL(registry).toString()
  } catch {}
  if (
    registry.endsWith('/') ||
    registry.indexOf('/', registry.indexOf('//') + 2) != -1
  ) return registry
  return `${registry}/`
}
