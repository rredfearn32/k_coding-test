//Lets require/import the FS module
var fs = require('fs');

// Canned is used for getting data from the file system,
// like from a folder and serve it to the user that calls
// the api of the server to get data
var canned = require('canned')
    ,   http = require('http')
    ,   opts = { cors: true, logger: process.stdout };

var nodestatic = require('node-static');

var randopeep = require('randopeep');
/*
* randopeep is for generate stuff that we can include in our fake
* data for use with the front end.
* */

can = canned('./', opts);

var file = new nodestatic.Server('./app');

fs.writeFileSync("./index.get.json", '[]');

//Generate 10 objects to work with in the backend for the front end

genobj(); genobj(); genobj(); genobj(); genobj();
genobj(); genobj(); genobj(); genobj(); genobj();
genobj(); genobj(); genobj(); genobj(); genobj();
genobj(); genobj(); genobj(); genobj(); genobj();

function generateGUID() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function genobj() {
    var o = JSON.parse(fs.readFileSync('./index.get.json', 'utf8'));
    var d = {
        driverID: generateGUID(),
        driverName: randopeep.name(),
        driverCityOrigin: randopeep.address.city(),
        "driverLanguage": ['de', 'en', 'nl', 'fr', 'es', 'ar'][Math.floor(Math.random()*7)],
        driverPhone: randopeep.address.phone(),
        "driverGender": ['male', 'female'][Math.floor(Math.random()*2)],
        driverInfo: randopeep.corporate.catchPhrase(0),
        carMake: randopeep.corporate.name('large', 0),
        "kmDriven": Math.floor(Math.random() * 100000),
        'location': randopeep.address.geo()
    };
    o.push(d);
    fs.writeFileSync("./index.get.json", JSON.stringify(o));
}

/**
 * Shuffles array in place. Fisher-Yates algorithm.
 * @param {Array} a items An array containing the items.
 */
function shuffleArray(array) {
    var randomNumberZeroToIndex, arrayItemBackup, i;
    for (i = array.length - 1; i > 0; i--) {
        // Generate random number between 0 - index
        randomNumberZeroToIndex = Math.floor(Math.random() * (i + 1)); // So the item may get swapped with itself
        arrayItemBackup = array[i]; // Backup array item at index
        array[i] = array[randomNumberZeroToIndex];
        array[randomNumberZeroToIndex] = arrayItemBackup;
    }
    return array;
}

// Here we generate data for the api that can use in front end
function rebuildDatabase() {
    var o = JSON.parse(fs.readFileSync('./index.get.json', 'utf8'));
    // Move object location random every 5 seconds
    shuffleArray(o);
    fs.writeFile("./index.get.json", JSON.stringify(o), (err) => {
        if (err) throw err;
        console.log('Mock data shuffled');
    });
}
setInterval(function() {
    rebuildDatabase();
}, 5000)

function cf() {fs.writeFile("./index.get.json", '[]');}

http.createServer(can).listen(3000);

http.createServer(function (request, response) {
    request.addListener('end', function () {
        
        // Serve files!
        file.serve(request, response);
    }).resume();
}).listen(8080);

