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

const getEmpleado=(id)=>{
    const EmpleadoEncontrado=empleado.find((e)=>e.id===id);
    const promesa=new Promise((resolve,reject)=>{
        if(EmpleadoEncontrado){
            resolve(EmpleadoEncontrado.nombre);
        }
        else{
            reject(`No existe empleado con id ${id}`);
        }

    });
    return promesa;
    
    }




   /* getEmpleado(6)
        .then(empleado=>console.log(empleado))
        .catch(err=>console.log(err));

*/
        

        const getSalario=(id)=>{

            const montoSalario=Salario.find((s)=>s.id===id);
            const promesaSalario=new Promise((solve,reject)=>{
                if(montoSalario){
                    solve(montoSalario.salario);
                }
                else{
                    reject(`no encontre el id ${id}`);
                }

            });
            return promesaSalario;

        }
/*

        getSalario(4)
            .then(salario=>console.log(salario))
            .catch(err=>console.log(err));*/
const id=4;
getEmpleado(id)
        .then((empleado)=>{
            getSalario(id)
                .then(salario=>{
                    console.log('el empleado', empleado,'tin', salario);
                })
        })