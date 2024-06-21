const superHero=require('./4_module_cashing');
console.log(superHero.getname());
superHero.setname("SuperHero");
console.log(superHero.getname());

// here it will print superman becausing of cashing
//because it will remember that this same module has
//been required before so it will continue with same data
//that above operation has
const newSuperHero=require('./4_module_cashing');
console.log(newSuperHero.getname());
