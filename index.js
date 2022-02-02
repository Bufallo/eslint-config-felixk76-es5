module.exports = {
    "extends": [
        "standard"
    ],
    "env": {
        "browser": true,
        "node": true,
        "jquery": true,
        "es6": false,
        "serviceworker": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "requireConfigFile":"false"
    },
    "rules": {
        "indent": [2, 4],
        "no-multiple-empty-lines": [2, { "max": 1, "maxEOF": 1 }],
        "comma-dangle": 0,
        "no-plusplus": [2, { "allowForLoopAfterthoughts": true }],
        "camelcase": 1,
        "vars-on-top": 0,
        "global-require": 0,
        "radix": 0,
        "strict": 0,
        "semi": ["error","always"],

        "arrow-body-style": 0,
        "arrow-parens": 0,
        "arrow-spacing": 0,
        "generator-star-spacing": 0,
        "no-confusing-arrow": 0,
        "no-useless-computed-key": 0,
        "no-useless-rename": 0,
        "no-var": 0,
        "object-shorthand": 0,
        "prefer-arrow-callback": 0,
        "prefer-const": 0,
        "prefer-destructuring": 0,
        "prefer-numeric-literals": 0,
        "prefer-template": 0,
        "rest-spread-spacing": 0,
        "sort-imports": 0,
        "template-curly-spacing": 0,
        "yield-star-spacing": 0,

        "quote-props": ["error","consistent"],
        "no-debugger": 0,
        "no-alert": 0,
        "no-console": 0,
        "no-await-in-loop": 0,
        "no-return-assign": [2,"except-parens"],
        "no-restricted-syntax": [2,"ForInStatement","LabeledStatement","WithStatement"],
        "no-unused-vars": [0,{"ignoreSiblings": true}],
        "no-param-reassign": [2,{"props": false}],
        "func-names": 0,
        "space-before-function-paren": 0,
        "max-len": 0,
        "no-underscore-dangle": 0,
        "consistent-return": 0,
        "import/prefer-default-export": 0,
        "import": 0,
        "import/no-extraneous-dependencies": 0,
        "import/extensions": 0
    }
};