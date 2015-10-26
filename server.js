//Lets require/import the HTTP module
var f = require('fs');

// Canned is used for getting data from the file system,
// like from a folder and serve it to the user that calls
// the api of the server to get data that is useful for the api
var canned = require('canned')
    ,   http = require('http')
    ,   opts = { cors: true, logger: process.stdout };

var randopeep = require('randopeep');
/*
* randopeep is for generate stuff that we can include in our fake
* data for use with the front end to do awsome stuff.
* Cool thing!!!!!!!!!!!
* */

can = canned('./', opts);

f.writeFile("./cars/index.get.json", '[]');

// Here we generate data for the api that can use in front for
// cool stuff.
// TODO: Maybe implement error checking but not a must
setInterval(function() {
    var o = JSON.parse(f.readFileSync('./cars/index.get.json', 'utf8'));
    var d = { driverName: randopeep.name(), driverCityOrigin: randopeep.address.city(),
    "driverLanguage": ['de', 'en', 'nl', 'fr', 'es', 'ar'][Math.floor(Math.random()*7)],
        driverPhone: randopeep.address.phone(),
"driverGender": ['male', 'female'][Math.floor(Math.random()*2)],
driverInfo: randopeep.corporate.catchPhrase(0),
    carMake: randopeep.corporate.name('large', 0),
        "kmDriven": Math.floor(Math.random() * 100000),
        'location': randopeep.address.geo()
    };
    o.push(d);
    f.writeFile("./cars/index.get.json",
        JSON.stringify(o));
}, 5000);

setInterval(function() { cf() }, 500000);

function cf() {f.writeFile("./cars/index.get.json", '[]');}
http.createServer(can).listen(3000);
