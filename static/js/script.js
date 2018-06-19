$(document).ready(function () {
    $.ajax({
        //url: "http://localhost:3002/meteo",
        url: "http://localhost:3002/paris",
        method: "POST",
        // data: obj,
        success: function (data) {
            var nom = data.name;
            var temp = data.main.temp;
            console.log(data);
            $('#liste-ville').append('<li class="list-group-item"> ' + data.name + ' : ' + data.main.temp + '</li>');
        }
    })
    //
    $.ajax({
        //url: "http://localhost:3002/meteo",
        url: "http://localhost:3002/marseille",
        method: "POST",
        // data: obj,
        success: function (data) {
            var nom = data.name;
            var temp = data.main.temp;
            console.log(data);
            $('#liste-ville').append('<li class="list-group-item"> ' + data.name + ' : ' + data.main.temp + '</li>');
        }
    })

    //

    $.ajax({
        //url: "http://localhost:3002/meteo",
        url: "http://localhost:3002/moscou",
        method: "POST",
        // data: obj,
        success: function (data) {
            var nom = data.name;
            var temp = data.main.temp;
            console.log(data);
            $('#liste-ville').append('<li  class="list-group-item"> ' + data.name + ' : ' + data.main.temp + '</li>');
        }
    })

    //

    $.ajax({
        //url: "http://localhost:3002/meteo",
        url: "http://localhost:3002/reunion",
        method: "POST",
        // data: obj,
        success: function (data) {
            var nom = data.name;
            var temp = data.main.temp;
            console.log(data);
            $('#liste-ville').append('<li class="list-group-item"> ' + data.name + ' : ' + data.main.temp + '</li>');
        }
    })


    //
})