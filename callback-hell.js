const empleados=[
    {
        id:1,
        nombre:'fernando'
    },
    {
        id:2,
        nombre:'linda'
    },
    {
        id:3,
        nombre:'Karen'
    }
]

const salarios=[
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:1500
    },
    {
        id:3,
        salario:2000
    }
]


const getEmpleado=(id,callback)=>{
    const empleado=empleados.find((v)=>{
        return v.id===id;
    })
    if(empleado){
        callback(null,empleado);
    }
    else{
        return` Empleado con id${id} no se ha encontrado`;
    }
}

//================

const getSalario=(id,callback)=>{
    const salario=salarios.find((s)=>{
        return s.id===id;
    })
    if(salario){
        callback(null,salario);
    }
    else{
        callback(`no existe salario para el id${id}`);
    }
}

//===============
    
getEmpleado(2,(err,empleado)=>{
    if(err){
        console.log('Error');
        return console.log(err);
    }
    else{
        console.log("empleado Existe");
        console.log(empleado);
    }
    
})

getSalario(2,(err,salario)=>{
    if(err){
        console.log("error");
        return console.log(err);
    }
    else{
        console.log("salario  existe");
        console.log(salario);
    }
})

