var ermeDobas = require('fs');

var ermeDobasModul = require('./01_ermeDobasModul.js');

ermeDobas.writeFile('ermeDobas.txt', " "+ermeDobasModul.ermeDobasSzamol()+"", 
    function(err){
        if (err) throw err;
        console.log("Létrejött az ermeDobas.txt az érmefeldobás eredményével :)");
    }
);