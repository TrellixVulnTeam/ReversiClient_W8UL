Game.Data = (function () {

    console.log('hallo, vanuit module data')

    let gameBoard = [
        "Geen, Geen, Geen, Geen, Geen, Geen, Geen, Geen",
        "Geen, Geen, Geen, Geen, Geen, Geen, Geen, Geen",
        "Geen, Geen, Geen, Geen, Geen, Geen, Geen, Geen",
        "Geen, Geen, Geen, Wit, Zwart, Geen, Geen, Geen",
        "Geen, Geen, Geen, Zwart, Wit, Geen, Geen, Geen",
        "Geen, Geen, Geen, Geen, Geen, Geen, Geen, Geen",
        "Geen, Geen, Geen, Geen, Geen, Geen, Geen, Geen",
        "Geen, Geen, Geen, Geen, Geen, Geen, Geen, Zwart"
    ];

    let apicall = (_url) => {
        return new Promise(function (resolve, reject) { 
            $.ajax({
                url: _url,
                data: {},
                type: "GET",
                success: function (data) {
                    resolve(data);
                },
                error: function (data) {
                    reject(data);
                },                
            })
        })
    }

    let placeDisc = function (cellId) {

        $("#" + cellId).append(
            "<div class=\"disc disc1\"></div>"
        )
    }

    let printboard = function () {
        for (var i = 0; i < gameBoard.length; i++) {
            var colour = gameBoard[i].split(", ");
            console.log(colour);

            for (var j = 0; j < colour.length; j++) {
                console.log(colour[j]);
                $("#board").append(
                    "<div class=\"cell\" onclick=\"Game.Data.showFiche(this.id)\" id=\"cell" + i + j + "\"></div>"
                )
                if (colour[j] == "Wit") {
                    $("#cell" + i + j+ "").append(
                        "<div class=\"disc disc1\"></div>"
                    )
                }
                else if(colour[j] == "Zwart") {
                    $("#cell" + i + j+ "").append(
                        "<div class=\"disc disc2\"></div>"
                    )
                }                           

            }
        }
    }    
    return {
        printboard: printboard,
        showFiche: placeDisc,
        apicall: apicall,
    };
})();