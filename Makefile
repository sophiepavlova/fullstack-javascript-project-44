install: 
	npm ci
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/brain-calc.js
brain-even:
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
