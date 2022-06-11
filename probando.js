const b=[{
    id:3,
    edad:5,
},{
    id:4,
    edad:6,
}];


const a=(e)=>{
    const emple=b.find((m)=>{
            return m.id===e;
    })
    return emple;

}
const c=a(4);
console.log(c);