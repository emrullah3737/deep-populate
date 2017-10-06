<h1 align="center">Deep Populate</h1>  

<div align="center">
  <strong>Mongoose deep populate query string conventor</strong>
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