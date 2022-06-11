const empleado=[
    {
        id:1,
        nombre:'fernandeo'
    },

    {
        id:2,
        nombre: 'Linda'
    },
    {
        id:3,
        nombre:'Neil'
    }
];

const Salario=[
    {
        id:1,
        salario:1500,
    },

    {
        id:2,
        salario:1000,
    },
    {
        id:3,
        salario:50000,
    }

];


const getEmpleado=(id,callback)=>{
const EmpleadoEncontrado=empleado.find((e)=>e.id===id)?.nombre;
if(EmpleadoEncontrado){
    callback(null,EmpleadoEncontrado);
}
else{
    callback(true,`el empleado con ID ${id} no existe`);
}

}

getEmpleado(36,(err,empleado)=>{
    if(err){
        console.log('error')
        return console.log(empleado);
    }
    console.log('empleado existe');
    console.log(empleado);
});


const getSalario=(id,callback)=>{
    const salarioencon=Salario.find((e)=>{
        return e.id===id;
    }).salario;

    if(salarioencon){
        callback(null,salarioencon);
    }
    else{
        callback(true,`El salario para el empleado con este ID ${id} no existe`);
    }

    

}


getSalario(2,(err,salario)=>{
    if(err){
        console.log('error');
        return console.log(salario);
    }
    console.log('empleado existe');
    console.log(salario);
})
