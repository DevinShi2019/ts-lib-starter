
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'prettier/@typescript-eslint',
        // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
		// 此行必须在最后
        'plugin:prettier/recommended',
    ],
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        // 支持最新 JavaScript
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    rules: {
        // 如果有不适合的规则，可以在此调整
		'prettier/prettier': 1,
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        "eqeqeq": ['warn', 'always'],
        "prefer-const": ['error', {"destructuring": "all", "ignoreReadBeforeAssign": true}],
        '@typescript-eslint/indent': ['error', 4, { VariableDeclarator: 4, SwitchCase: 1 }],
        '@typescript-eslint/no-unused-vars': 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-triple-slash-reference": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/no-this-alias": 0,
        "@typescript-eslint/triple-slash-reference": ['error', { "path": "always", "types": "never", "lib": "never" }],
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/consistent-type-assertions": 0,
        "@typescript-eslint/no-empty-function": 0,
        "prefer-rest-params": 0,
        "prefer-spread": 0,
        "@typescript-eslint/no-use-before-define": 1
    },
}