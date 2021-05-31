const image_search = require('g-i-s')
const fs = require('fs')
const download = require('download')

var text = fs.createWriteStream("my_file.txt");

function image(keyword){
 
    image_search(keyword, logResults)
    
    async function logResults(error, results) {
        if (error) {
            console.log(error);
        }
        else {
            for(var i =1; i<results.length;i++){
                console.log(results[i].url)
                try{
                    await download(results[i].url, 'image')
                }catch(err){}
            }
        }
    }
}
image('love live sunshine')