install: 
	npm install

brain-games: 
	npx brain-games

brain-even:
	node -r esm bin/brain-even.js

brain-calc:
	node -r esm bin/brain-calc.js

brain-gcd:
	node -r esm bin/brain-gcd.js

brain-prime:
	node -r esm bin/brain-prime.js

brain-progression:
	node -r esm bin/brain-progression.js

rec: 
	asciinema rec

publish:
	npm publish --dry-run

lint:
	npx eslint .