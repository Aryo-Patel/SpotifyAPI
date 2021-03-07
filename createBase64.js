const fs = require('fs');

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
let text = base64_encode('./public/images/artwork-playlist-compressed.jpg')

fs.writeFile('base64.txt', text, function(err){
    if (err) return console.log(err);
})