
// creating a parent class
class AnimalKingdom {

    // creating an abstraction class
    // constructor() {
    //     if(this.constructor == AnimalKingdom){
    //         throw new Error('Just Dey Play')
    //     }
    // }

    // Creating an Encapsulation Class

    withBackbone() {
        console.log("I'm an animal with backbone")
    }

    withoutBackbone(){
        console.log("I'm an animal without backnone")
    }

    // Creating a mediator that can access the property

    displayAnimalWithBckbone(){
        this.withBackbone()
    }

    displayAnimalWithoutBckbone(){
        this.withBackbone()
    }

    // creating a property call 

    coldBlooded = 'Anthropoda, Fish, Amphibia, Reptiles'
    warmBlooded = 'Aves, Mammals'

    show_coldBlooded(){
        console.log(this.coldBlooded);
    }

    show_warmBlooded(){
        console.log(this.warmBlooded)
    }

}

const Animal = new AnimalKingdom()
Animal.displayAnimalWithBckbone()

// creating a child class tat inherits from the parent property class
class AnimalsWithBackbone extends AnimalKingdom {
    Mammals = 'Dog'
    Aves = 'Dove'
    Reptiles = 'Lizard'
    Fish = 'Salmon'

    animalsMammals(){
        console.log(this.Mammals)
    }
    animalsAves(){
        console.log(this.Aves)
    }
    animalsReptiles(){
        console.log(this.Reptiles)
    }
    animalsFish(){
        console.log(this.Fish)
    }
}

class AnimalWithoutBackbone extends AnimalKingdom {
    Anthropoda = 'Spider';


    // coldBlooded(){
    //     throw new Error('Bababula bua')
    // }

    animalAnthropoda(){
        console.log(this.Anthropoda)
    }
}


class coldBlooded extends AnimalKingdom {
    coldBloodedAnimals = 'Anthropoda, Fish, Amphibia, Reptiles'

    show_coldBlooded(){
        console.log(this.coldBloodedAnimals)
    }
}

class warmBlooded extends AnimalKingdom {
    warmBloodedAnimals = 'Aves, Mammals'

    show_warrmBlooded(){
        console.log(this.warmBloodedAnimals)
    }
}

const withBackbone = new AnimalsWithBackbone();
withBackbone.animalsAves();
withBackbone.animalsFish();
withBackbone.animalsMammals();
withBackbone.animalsReptiles();

const withoutBackbone = new AnimalWithoutBackbone();
withoutBackbone.animalAnthropoda()

const coldBloodedAnimals = new coldBlooded()
coldBloodedAnimals.show_coldBlooded()


const warmBloodedAnimals = new warmBlooded()
warmBloodedAnimals.show_warmBlooded()