const getUsuarioById=(id,callback)=>{
    const usuario={
        id:id,
        nombre:'Neil'
    }
    setTimeout(()=>{
        callback(usuario)
    },2000);
}
getUsuarioById(10,(usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});