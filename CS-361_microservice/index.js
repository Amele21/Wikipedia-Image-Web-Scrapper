const { time } = require('console')
const fs = require('fs')


let element = 'fish'

//Request to microservice using requestLinks.txt
fs.writeFile('requestLinks.txt', element , err =>{
    if (err) {
        console.error(err)
        return
    }    
    })

//wait a few seconds for microservice
sleep(6000).then(() => {
//Retrieve from microservice using imageLinks.txt
fs.readFile('imageLinks.txt', 'utf8', (err, data) => {
    if (err) {
        return;
    }
    console.log(data)
})
});

//sleep function
function sleep (time){
    return new Promise((resolve) => setTimeout(resolve, time));
}












