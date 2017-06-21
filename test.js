'use strict';
const test = require('tape')
const normalizeRegistrUrl = require('.')

test('normalizeRegistrUrl()', t => {
  t.throws(() => normalizeRegistrUrl(1), '`registry` should be a string')
  t.equal(normalizeRegistrUrl('https://registry.npmjs.org'), 'https://registry.npmjs.org/')
  t.equal(normalizeRegistrUrl('https://registry.npmjs.org/'), 'https://registry.npmjs.org/')
  t.end()
})
