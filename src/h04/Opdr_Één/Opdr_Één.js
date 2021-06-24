var mijnauto = {
    kleur: "blauw",
    merk: "Ford",
    snelheid: 0,

    gasGeven: function() {
            this.snelheid += 5;
            console.log(this.snelheid);
        },

        toeteren: function() {
            console.log("toet!");
        }
}

console.log(mijnauto.kleur);
mijnauto.gasGeven();
mijnauto.gasGeven();
mijnauto.gasGeven();
mijnauto.gasGeven();
mijnauto.gasGeven();
mijnauto.gasGeven();
mijnauto.gasGeven();
mijnauto.toeteren();

