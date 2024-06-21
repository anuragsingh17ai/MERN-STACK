class Superhero{
    constructor(name){
        this.name=name;
    }
    getname(){
        return this.name;
    }
    setname(name){
        this.name=name;
    }
}

module.exports=new Superhero("Batman");
//if you want to avoid cashing  then simply export class rather than
//its instance
//module.exports=Superhero