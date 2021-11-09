class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  get activity() {
    const today = new Date();
    const hour = today.getHours();
    if(hour > 8 && hour <= 20){
      return 'playing...';
    } else {
      return 'sleeping...';
    }
  }

  get owner(){
  return this._owner;
  }

  set owner (owner){
    this._owner = owner;
    console.log(`Setter caller: ${owner}`);
  }

  speak () {
    console.log(this.sound);
  }
}

const ernie = new Pet('dog', 1, 'pug','gaf gaf');
const vera = new Pet('dog', 8, 'german Colly', 'naf naf');

ernie.owner = 'Ashly';
console.log(ernie.owner);
