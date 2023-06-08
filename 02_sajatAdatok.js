var adatokJSON = require('fs');

function sajatAdatokLetrehoz () {
    return JSON.stringify({
        name: "Németh Barbara",
        birthDate: "1979-03-14",
        email: "nemethbarbo@gmail.com",
        hobby: "collecting wooden toys"
    }, null, 2);
}

adatokJSON.writeFile('sajatAdatok.json', sajatAdatokLetrehoz() +"",
    function(err){
        if (err) throw err;
    console.log("Létrejött a sajatAdatok.json a kért adatokkal :)");
    }
);