(function () {
    var localParis = '/paris';
    var localMarseille = '/marseille';
    var localMoscou = '/moscou';
    var localReunion = '/reunion';
    
    $(document).ready(function() {
        $.ajax({
        type: 'POST',
        url: 'http://localhost:3002'+ localParis,
        data : + city1 + url1 ,
        success: function (meteo) {
            for (var i = 0; i < meteo.length; i++) {
                var meteoParis = "";
                // var meteoMoscou = "";
                // var meteoMarseille = "";

                if(meteo[i].name === "Paris"){
                   meteoParis = main.temp_min + main.temp_max;
                }
                // else if (meteo[i].name === "Moscou") {
                //     meteoMoscou = main.temp_min + main.temp_max;
                    
                // }
                // else if (meteo[i].name === "Marseille") {
                //     meteoMarseille = main.temp_min + main.temp_max;
                    
                // }
                // else if (meteo[i].name === "Reunion") {
                //     meteoMarseille = main.temp_min + main.temp_max;
                    
                // }
                $('.liste-ville').append('<li class="list-group-item">' + meteo[i].name +  '  <span>')
                $('.liste-ville').append(''+ meteo[i].name.temp_min + '</span>') ;
                $('.liste-ville').append('<span>' + meteo[i].name.temp_max + '</span></li>');

            }
        },
    
        error: function (resultat, statut, erreur) {
    
            alert('ERROR 404');
        }
        });

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3002'+ localMarseille,
            data : + city2 + url2 ,
            success: function (meteo2) {
                for (var i = 0; i < meteo2.length; i++) {
                    var meteoMarseille = "";
                    if(meteo2[i].name === "Marseille"){
                       meteoParis = main.temp_min + main.temp_max;
                    }
                    $('.liste-ville').append('<li class="list-group-item">' + meteo2[i].name +  '  <span>')
                    $('.liste-ville').append(''+ meteo2[i].name.temp_min + '</span>') ;
                    $('.liste-ville').append('<span>' + meteo2[i].name.temp_max + '</span></li>');
    
                }
            }

        });
    });

    //+ city2 + url2 + city3 + url3 + city4 + url4
});