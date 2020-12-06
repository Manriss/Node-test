const fs=require('fs');
let crearArchivo= (base,limite)=>{
    return new Promise((resolve,reject)=>{
        if (!Number(base)){
            reject('No es un numero');
            return;
        }
        let data='';
        for (let contador=1;contador<=limite;contador++){
            data+=(`${base} * ${contador}=${base*contador}\n`);
        }
        fs.writeFile(`Tablas/tabla-${base}.txt`,data,(err)=>{
            if(err) 
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
            
        })
    })
}

let listarTabla=(base,limite)=>{
    

        for (let contador=1;contador<=limite;contador++){
            console.log(`${base} * ${contador} = ${base*contador}`)
            }
        

    
}
module.exports={
    crearArchivo,
    listarTabla
}