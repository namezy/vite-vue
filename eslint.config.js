import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        rules: {
            // override/add rules settings here, such as:
            // 'vue/no-unused-vars': 'error'
            'vue/multi-word-component-names': 'off',
            // 'vue/max-attributes-per-line': 'off', //这条规则是什么意思
            'vue/singleline-html-element-content-newline': 'off',
            'vue/html-self-closing': ['error', { html: { void: 'always', normal: 'never' } }],
            'vue/html-closing-bracket-newline': 'off',
            'vue/html-indent': 'off',
        },
    },
    {
        files: ['**/*.vue'],
        languageOptions: { parserOptions: { parser: tseslint.parser } },
    },
];
