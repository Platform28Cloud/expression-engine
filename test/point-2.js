const test = require('ava')

const { testParser } = require('./utils')

const title = 'point 2'

test(title, (t) => {
  const { tokens, ast, result, printResult } = testParser(`a[0].b`, t, {
    context: {
      a: [
        {
          b: 2
        }
      ]
    }
  })
  t.snapshot({ tokens, ast, result, printResult }, { id: title })
})
