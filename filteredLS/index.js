const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
	if (err) {
	  	console.log(err)
	}
	else {
		list.forEach((file) => {
			if (path.extname(file) === '.' + process.argv[3])
			console.log(file)
		})
	}
});
