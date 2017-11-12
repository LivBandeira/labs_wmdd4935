let extFunc = require('./makeItModular.js')
let dir = process.argv[2]
let ext = process.argv[3]
 
extFunc(dir, ext, function (err, list) {
  if (err)
    return console.error(err)
 
  list.forEach(function (file) {
    console.log(file)
  })
})
