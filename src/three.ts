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

class HeroNumber1{
    fname:string;
    lname:string;
    private _secret:string;
    constructor(arg_fname: string, arg_lname: string){
        this.fname = arg_fname
        this.lname = arg_lname
        this._secret = "top secret";
    }
    fullname(){
        return this.fname+" "+this.lname
    }
    get secret(){
        return this._secret
    }
    set secret(arg){
        this._secret = arg
    }
};
let comichero:HeroNumber1 = new HeroNumber1("Bruce", "Wayne")
console.log(comichero.fname, comichero.lname, comichero.fullname())
console.log("++++++++++++++++++++++++");
console.log( comichero.secret );
comichero.secret = "Mission updated";
console.log( comichero.secret );