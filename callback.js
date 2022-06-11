//setTimeout(()=>{
  //  console.log("Hola Mundo")
//},10000);

const getUsuarioById=(id,callback)=>{
    const usuario={
        id,
        nombre:"neil"
    }
    setTimeout(()=>{
        callback(usuario)
    },1500)
}
getUsuarioById(10,(nombre)=>{
    console.log(nombre);
});