const bandcamp = require('bandcamp-scraper')
const { exec } = require('child_process');
var fs = require('fs');

let tag = 'electronic'
let dir = "./dl/" + tag

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

for(page of Array(30).keys()){
    const params = {
        tag: tag,
        page: 1
        }
        
    bandcamp.getAlbumsWithTag(params, function (error, tagResults) {
        if (error) {
        console.log(error)
        } else {
        console.log(tagResults)
        }
    })
}

/*
            tagResults.map(item => {
                console.log(item.url)
                exec("bandcamp-dl -n --template='%{artist}-%{album}/%{track}-%{title}' --base-dir ./dl/" + tag + "/ " + item.url, (err, stdout, stderr) => {
                    if (err) {
                    return;
                    }
                    console.log(`stdout: ${stdout}`);
                    console.log(`stderr: ${stderr}`);
                });
            })
*/
