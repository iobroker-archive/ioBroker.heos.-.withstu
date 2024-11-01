export default [
	{
		'ignores': ['docs/**/*'],
		'rules': {
			'indent': [
				'error',
				'tab',
				{
					'SwitchCase': 1
				}
			],
			'no-console': 'off',
			'no-unused-vars': [
				'error',
				{
					'ignoreRestSiblings': true,
					'argsIgnorePattern': '^_'
				}
			],
			'no-var': 'error',
			'no-trailing-spaces': 'error',
			'prefer-const': 'error',
			'quotes': [
				'error',
				'single',
				{
					'avoidEscape': true,
					'allowTemplateLiterals': true
				}
			],
			'semi': [
				'error',
				'always'
			]
		},
	}
];