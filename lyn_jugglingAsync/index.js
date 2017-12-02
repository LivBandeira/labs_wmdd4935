const http = require('http');
const bl = require('bl');
let order = 0;
let answer = [];
let i;

function urlGet(index) {
    let url = process.argv[2 + index];

    http.get(url, function(res) {
        res.pipe(bl(function(err, data) {

            if (err)
                return console.error(err);

            answer[index] = data.toString();
            order++;

            if (order == 3)
                for (i = 0; i < 3; i++)
                    console.log(answer[i]);
        }));
    });
}

for (i = 0; i < 3; i++)
    urlGet(i);
