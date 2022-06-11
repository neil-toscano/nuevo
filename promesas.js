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

const getEmpleado=(id)=>{
    
const promesa=new Promise((resolve,reject)=>{
    const empleado=empleados.find((v)=>{
        return v.id===id;
    })?.nombre;
    if(empleado){
        resolve(empleado);
    }
    else{
        reject(`No existe empleado con id ${id}`);
    }
})
return promesa;
}
const id=2;
 getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err=>console.log(err));

    ////==========
const getSalario=(id)=>{
        const promesa=new Promise((resolve,reject)=>{
            const salario=salarios.find((s)=>{
                return s.id===id;
            })?.salario;

            if(salario){
                resolve(salario);
            }
            else{
                reject(`no existe id ${id} `)
            }
        })
        return promesa;

    }

    const id2=7;
    getSalario(id2)
        .then(salario=> console.log(salario))
        .catch(err=>console.log(err));