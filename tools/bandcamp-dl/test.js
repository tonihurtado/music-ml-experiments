const bandcamp = require('bandcamp-scraper')
const { exec } = require('child_process');

for(page of Array(10).keys()){
  const params = {
    query: 'Derek Carr',
    page: page
  }
  
  bandcamp.search(params, function (error, searchResults) {
    if (error) {
      console.log(error)
    } else {
      searchResults.map(item => {
        if(item.type == 'album'){
          console.log(item.url)
          console.log(item.tags)
          exec("bandcamp-dl -n --template='%{artist}-%{album}/%{track}-%{title}' --base-dir ./dl/ " + item.url, (err, stdout, stderr) => {
            if (err) {
              return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
          });
        }
      })
    }
  })
}

