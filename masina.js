class Masina{
    constructor(marca, model, culoare, kilometraj){
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    };
        getProprietati = function(){
        console.log(`Masina 
           [marca = ${this.marca},
            model = ${this.model},
            culoare = ${this.culoare},
            kilometraj = ${this.kilometraj},] `) 
    };
 };
 
// get proprietati(){
//     return
// }

export default Masina;