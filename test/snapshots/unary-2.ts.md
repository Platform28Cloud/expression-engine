# Snapshot report for `test/unary-2.ts`

The actual snapshot is saved in `unary-2.ts.snap`.

Generated by [AVA](https://avajs.dev).

## unary 2

> Snapshot 1

    {
      ast: {
        left: {
          name: 'a',
          range: [
            0,
            1,
          ],
          type: 'Identifier',
        },
        operator: '*',
        range: [
          0,
          12,
        ],
        right: {
          argument: {
            left: {
              range: [
                6,
                7,
              ],
              type: 'NumericLiteral',
              value: 1,
            },
            operator: '+',
            range: [
              6,
              11,
            ],
            right: {
              range: [
                10,
                11,
              ],
              type: 'NumericLiteral',
              value: 2,
            },
            type: 'BinaryExpression',
          },
          operator: '-',
          range: [
            4,
            12,
          ],
          type: 'UnaryExpression',
        },
        type: 'BinaryExpression',
      },
      printResult: 'a * -(1 + 2)',
      result: -6,
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
            2,
            3,
          ],
          type: 'PunctuatorToken',
          value: '*',
        },
        {
          range: [
            4,
            5,
          ],
          type: 'PunctuatorToken',
          value: '-',
        },
        {
          range: [
            5,
            6,
          ],
          type: 'PunctuatorToken',
          value: '(',
        },
        {
          range: [
            6,
            7,
          ],
          type: 'NumericLiteral',
          value: 1,
        },
        {
          range: [
            8,
            9,
          ],
          type: 'PunctuatorToken',
          value: '+',
        },
        {
          range: [
            10,
            11,
          ],
          type: 'NumericLiteral',
          value: 2,
        },
        {
          range: [
            11,
            12,
          ],
          type: 'PunctuatorToken',
          value: ')',
        },
      ],
    }