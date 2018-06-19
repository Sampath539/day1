"use strict";
/*
var Hero = function(){
    var secret = "My Secret";
    this.fname = "Bruce";
    this.lname = "Wayne";
};

var hero = new Hero();
console.log(hero.fname);
console.log(hero.secret);// undefined
*/
var HeroNumber1 = /** @class */ (function () {
    function HeroNumber1(arg_fname, arg_lname) {
        this.fname = arg_fname;
        this.lname = arg_lname;
        this._secret = "top secret";
    }
    HeroNumber1.prototype.fullname = function () {
        return this.fname + " " + this.lname;
    };
    Object.defineProperty(HeroNumber1.prototype, "secret", {
        get: function () {
            return this._secret;
        },
        set: function (arg) {
            this._secret = arg;
        },
        enumerable: true,
        configurable: true
    });
    return HeroNumber1;
}());
;
var comichero = new HeroNumber1("Bruce", "Wayne");
console.log(comichero.fname, comichero.lname, comichero.fullname());
console.log("++++++++++++++++++++++++");
console.log(comichero.secret);
comichero.secret = "Mission updated";
console.log(comichero.secret);
//# sourceMappingURL=three.js.map