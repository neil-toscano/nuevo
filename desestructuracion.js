const deapool={
    nombre:'wade',
    apellido:'winston',
    poder:'regeneracion',
    getNombre(){
        return `${ this.nombre} ${this.apellido}`;
    }
    }

   function imprimeHeroe(heroe){
const {nombre,apellido,poder}=heroe;
    console.log(nombre,apellido,poder);
   }
   imprimeHeroe(deapool);
const heroe=['Neil','Superman'];
const [h1,h2]=heroe;
const[,x1]=heroe;
console.log(h1,h2);
console.log(x1);


    //const {nombre,apellido,poder}=deapool;
   // console.log(nombre,apellido,poder);