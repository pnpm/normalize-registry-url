'use strict';
const test = require('tape')
const normalizeRegistrUrl = require('.')

test('normalizeRegistrUrl()', t => {
  t.throws(() => normalizeRegistrUrl(1), '`registry` should be a string')
  t.equal(normalizeRegistrUrl('https://registry.npmjs.org'), 'https://registry.npmjs.org/')
  t.equal(normalizeRegistrUrl('https://registry.npmjs.org/'), 'https://registry.npmjs.org/')
  t.equal(normalizeRegistrUrl('https://registry.npmjs.org/foo'), 'https://registry.npmjs.org/foo')
  t.equal(normalizeRegistrUrl('https://registry.npmjs.org/foo/'), 'https://registry.npmjs.org/foo/')
  t.equal(normalizeRegistrUrl('//registry.npmjs.org'), '//registry.npmjs.org/')
  t.equal(normalizeRegistrUrl('//registry.npmjs.org/'), '//registry.npmjs.org/')
  t.equal(normalizeRegistrUrl('//registry.npmjs.org/foo'), '//registry.npmjs.org/foo')
  t.equal(normalizeRegistrUrl('//registry.npmjs.org/foo/'), '//registry.npmjs.org/foo/')
  t.end()
})
