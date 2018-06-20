var express = require('express'),
    server = express();
var bodyParser = require('body-parser');
var request = require('request');
var meteo = [];

server.use(express.static("static"));

server.use(bodyParser.urlencoded({extended:true}));

// request module
// Request.post('http://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=fedad0ed38d6e8c4b22c03453cd6f90d') {
//     if(err){
//         console.log('error:', error);
//     } else {
//         console.log('body:', body);
//     },
// };

// clé API
let apiKey = 'fedad0ed38d6e8c4b22c03453cd6f90d';

let city1 = 'Paris';
let url1 = `http://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}`;

request(url1, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
 
let city2 = 'Marseille';
let url2 = `http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}`;

request(url2, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      console.log('body:', body);
    }
});

let city3 = 'Moscou';
let url3 = `http://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${apiKey}`;

request(url3, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      console.log('body:', body);
    }
});


let city4 = 'Reunion';
let url4 = `http://api.openweathermap.org/data/2.5/weather?q=${city4}&appid=${apiKey}`;

request(url4, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      console.log('body:', body);
    }
});


// server.get("/paris",function(req, res){
//     let city1 = 'Paris';
//     let url1 = `http://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}`;
//     res.send('' + city1 + url1 );
//     console.log(city1);
// });


server.get("/marseille",function(req, res){
    let city2 = 'Marseille';
    let url2 = `http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}`;
    res.send('' + city2 + url2 );
});

server.get("/moscou",function(req, res){
    let city3 = 'Moscou';
    let url3 = `http://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${apiKey}`;
    res.send('' + city3 + url3);
});

server.get("/reunion",function(req, res){
    let city4 = 'Reunion';
    let url4 = `http://api.openweathermap.org/data/2.5/weather?q=${city4}&appid=${apiKey}`;
    res.send('' + city4 + url4);
});

server.get("/",function(req, res){
    res.sendFile(__dirname +"/index.html");

}); 


server.post("/paris", function (req, res) {
  var url = url1;//paris
  request(url, function (err, response, body) {
    if (err) {
      console.log('error:', error);
    } else {
      console.log('body:', body);
    }
    body = JSON.parse(body)
    res.json(body);
  });

}); 


server.post("/marseille", function (req, res) {
  var url = url2;//marseille
  request(url, function (err, response, body) {
    if (err) {
      console.log('error:', error);
    } else {
      console.log('body:', body);
    }
    body = JSON.parse(body)
    res.json(body);
  });

}); 

server.post("/moscou", function (req, res) {
  var url = url3;//moscou
  request(url, function (err, response, body) {
    if (err) {
      console.log('error:', error);
    } else {
      console.log('body:', body);
    }
    body = JSON.parse(body)
    res.json(body);
  });

}); 

server.post("/reunion", function (req, res) {
  var url = url4;//reunion
  request(url, function (err, response, body) {
    if (err) {
      console.log('error:', error);
    } else {
      console.log('body:', body);
    }
    body = JSON.parse(body)
    res.json(body);
  });

}); 

//  var links = ["http://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=${apiKey}", "http://api.openweathermap.org/data/2.5/weather?q=Marseille&APPID=${apiKey}", "http://api.openweathermap.org/data/2.5/weather?q=Moscou&APPID=${apiKey}", "http://api.openweathermap.org/data/2.5/weather?q=Reunion&APPID=${apiKey}"]
  
// for (i = 0; i < links.length; i++) {
//     var obj = [];
//     request.post({
//         "headers": { "content-type": "application/json" },
//         "url": links,
//     }, (error, response, body) => {
//         if (error) {
//             return console.dir(error);
//         }
//         obj = JSON.parse(body);
//         return obj;
//     });

// }

server.post('/meteo', function (req, res) {
    res.json(obj)
});


server.listen(3002);    