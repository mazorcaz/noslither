/*
 * noslither extract.js v1.0.0
 * 9/8/2026
 */

import fs from 'node:fs/promises';
import jsb from 'js-beautify';

let mainSrc = await fetch('https://slither.io');
if (!mainSrc.ok) throw new Error('HTTP Error ' + mainSrc.status);
mainSrc = await mainSrc.text();

let match = mainSrc.match(/<script type='text\/javascript' src='([^']*)'>/);

if (match && match[1]) {
	console.log('Fetching main source from ' + match[1]);

	let jsSrc = await fetch(match[1]);
	if (!jsSrc.ok) throw new Error('HTTP Error ' + jsSrc.status + '. Is the script up to date?');
	jsSrc = await jsSrc.text();

	await fs.mkdir('extracted/', {recursive: true});

	fs.writeFile('extracted/raw.js', jsSrc);

	jsSrc = jsb.js_beautify(jsSrc, {
		indent_with_tabs: true
	});

	fs.writeFile('extracted/beautified.js', jsSrc);
}
