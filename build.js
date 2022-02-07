const fs = require('fs');
const pkg = require('./package.json');
const webpack = require('./webpack.config');
const bookmarkletify = require('./node_modules/@neos21/bookmarkletify/main');

try {
	const bookmarklet = bookmarkletify(fs.readFileSync(`./dist/${webpack.output.filename}`, 'utf-8'));
	const readme = `# ${pkg.name} ${pkg.version}\n${pkg.description}\n\n\`\`\`\n${bookmarklet}\n\`\`\`\n`;
	fs.writeFileSync('./README.md', readme, 'utf-8');
	process.exit(0);
} catch (e) {
	console.error(e);
	process.exit(1);
}
