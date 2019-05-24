# Snapshot report for `test/conditional.js`

The actual snapshot is saved in `conditional.js.snap`.

Generated by [AVA](https://ava.li).

## conditional expression

    {
      ast: {
        alternate: {
          range: [
            29,
            37,
          ],
          type: 'StringLiteral',
          value: 'column',
        },
        consequent: {
          range: [
            21,
            26,
          ],
          type: 'StringLiteral',
          value: 'row',
        },
        range: [
          0,
          37,
        ],
        test: {
          left: {
            object: {
              name: 'a',
              range: [
                0,
                1,
              ],
              type: 'Identifier',
            },
            optional: false,
            property: {
              name: 'width',
              range: [
                2,
                7,
              ],
              type: 'Identifier',
            },
            range: [
              0,
              7,
            ],
            type: 'MemberExpression',
          },
          operator: '>',
          range: [
            0,
            18,
          ],
          right: {
            object: {
              name: 'a',
              range: [
                10,
                11,
              ],
              type: 'Identifier',
            },
            optional: false,
            property: {
              name: 'height',
              range: [
                12,
                18,
              ],
              type: 'Identifier',
            },
            range: [
              10,
              18,
            ],
            type: 'MemberExpression',
          },
          type: 'BinaryExpression',
        },
        type: 'ConditionalExpression',
      },
      result: 'row',
      tokens: [
        {
          name: 'a',
          range: [
            0,
            1,
          ],
          type: 'Identifier',
        },
        {
          range: [
            1,
            2,
          ],
          type: 'PunctuatorToken',
          value: '.',
        },
        {
          name: 'width',
          range: [
            2,
            7,
          ],
          type: 'Identifier',
        },
        {
          range: [
            8,
            9,
          ],
          type: 'PunctuatorToken',
          value: '>',
        },
        {
          name: 'a',
          range: [
            10,
            11,
          ],
          type: 'Identifier',
        },
        {
          range: [
            11,
            12,
          ],
          type: 'PunctuatorToken',
          value: '.',
        },
        {
          name: 'height',
          range: [
            12,
            18,
          ],
          type: 'Identifier',
        },
        {
          range: [
            19,
            20,
          ],
          type: 'PunctuatorToken',
          value: '?',
        },
        {
          range: [
            21,
            26,
          ],
          type: 'StringLiteral',
          value: 'row',
        },
        {
          range: [
            27,
            28,
          ],
          type: 'PunctuatorToken',
          value: ':',
        },
        {
          range: [
            29,
            37,
          ],
          type: 'StringLiteral',
          value: 'column',
        },
      ],
    }