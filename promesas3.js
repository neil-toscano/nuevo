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
        const EmpleadoEncontrado=empleados.find((e)=>e.id===id)?.nombre;
        if(EmpleadoEncontrado){
            resolve(EmpleadoEncontrado);
        }
        else{
            reject(`no existe el empleado con id ${id}`);
        }
        
    })
    return promesa;
    }
    
/*   getEmpleado(6)
        .then(data =>{
            console.log(data);
        })
        .catch(err =>{
            console.log(err);
        });
*/

const getSalario=(id)=>{
    const salarioPromesa=salarios.find((s)=>s.id===id)?.salario;

    const promesalario=new Promise((resolve,reject)=>{
        if(salarioPromesa){
            resolve(salarioPromesa);
        }
        else{
            reject(`no existe usuario con id ${id} :( `);
        }
    })

    return promesalario;

}

id=10;
/*getEmpleado(id)
    .then(empleado=>{
        getSalario(id)
        .then(s=>{console.log('el empleado: ',empleado, ' con salario: ',s)})
        .catch(err=>{console.log(err)});
    })
    .catch(err=>{
        console.log(err);
    })*/
    let nombre;
    getEmpleado(id)
        .then(empleado=>{
            nombre=empleado;
            return getSalario(id)
        })
        .then(sala=>{console.log('el empleado', nombre, 'con salario: ',sala)})
        .catch(err=>console.log(err));
    