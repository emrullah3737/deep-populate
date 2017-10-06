<h1 align="center">Deep Populate</h1>  

<div align="center">
  <strong>Mongoose deep populate query string conventor</strong>
</div>

<div align="center">
  <!-- NPM version -->
  <a href="https://www.npmjs.com/package/deep-populate" target="_blank">
    <img src="https://img.shields.io/npm/v/deep-populate.svg" alt="NPM version" />
  </a>
  <!-- licence -->
  <a href="https://www.npmjs.com/package/deep-populate" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="NPM version" />
  </a>
  <!-- Travis CI -->
  <a href="https://travis-ci.org/emrullah3737/deep-populate" target="_blank">
    <img src="https://travis-ci.org/emrullah3737/deep-populate.svg?branch=master" alt="Build" />
  </a>
  <!-- Codeclimate -->
  <a href="https://codeclimate.com/github/emrullah3737/deep-populate" target="_blank">
    <img src="https://img.shields.io/codeclimate/github/emrullah3737/deep-populate.svg" alt="Codeclimate" />
  </a>
  <!-- Codeclimate Coverage -->
  <a href="https://codeclimate.com/github/emrullah3737/deep-populate" target="_blank">
    <img src="https://img.shields.io/codeclimate/coverage/emrullah3737/deep-populate.svg" alt="Codeclimate Coverage" />
  </a>
  <!-- Github Stars -->
  <a href="https://github.com/emrullah3737/deep-populate" target="_blank">
    <img src="https://img.shields.io/github/stars/emrullah3737/deep-populate.svg" alt="Github Stars" />
  </a> 
  <!-- Downloads -->
  <a href="https://www.npmjs.com/package/deep-populate" target="_blank">
    <img src="https://img.shields.io/npm/dt/deep-populate.svg" alt="Downloads" />
  </a>  
  <!-- Downloads Month -->
  <a href="https://www.npmjs.com/package/deep-populate" target="_blank">
    <img src="https://img.shields.io/npm/dm/deep-populate.svg" alt="Downloads Month" />
  </a>
</div>

<h1 align="center">Usage</h1>

	$npm install deep-populate

```javascript
const deepPopulate = require('deep-populate');

const str = 'profile,system.user';
const populate = deepPopulate(str);
/* populate = [{
	path: 'profile',
    populate: '',
}, {
	path: 'system',
    populate: {
    	path: 'user',
        populate: '',
    },
}]; */
Story.
  findOne({ title: 'Casino Royale' }).
  populate(populate).
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
  });

```