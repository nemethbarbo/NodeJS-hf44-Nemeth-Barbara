

function ermeFelDobSzazszor () { 
    var dobasok = [];
    for (let i = 0; i < 100; i++) {
        randomSzam = Math.floor(Math.random() * 2);
        var dobas = "";
        if (randomSzam === 1) {
            dobas ="fej";
        } else {
            dobas ="írás";
        }
        dobasok.push(dobas);
    }
    return dobasok;
}



exports.ermeDobasSzamol = function () {
    let dobasok = ermeFelDobSzazszor();
    let dobasokLista = ermeFelDobSzazszor() + "";
    let fejOsszes = dobasok.filter(dobas => dobas === "fej").length;    // filter csak functionön műk.
    return "Az érmefeldobások eredménye: " + dobasokLista + ", \n közülük a fejek száma: " +fejOsszes +", \n közülük az írások száma: " +Number(dobasok.length-fejOsszes) ; // + ", az írások száma: " +(dobasok.length - fejOsszes);
}
