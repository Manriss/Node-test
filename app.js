const argv=require('yargs')
.command('listar','Imprime en consola la tabla de muliplicar',{
base: {
    demand: true,
    alias: 'b'
},
limite: {
    demand: true,
    alias: 'l',
    default: 10
}
})
.command('crear','crea archivo tabla multiplicar',{
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',
        default: 10
    }
})
.help()
.argv;

// let base='er';
// console.log(process.argv);
console.log(argv._[0]);
const {crearArchivo, listarTabla}=require('./multiplicar/multiplicar.js');
let comando=argv._[0];
switch(comando){
    case 'listar':
        console.log('listar:'+argv.base+'-'+argv.limite);
        listarTabla(argv.base,argv.limite)
        break;
    case 'crear':
        console.log('crear '+argv.base);
        crearArchivo(argv.base,argv.limite)
            .then(archivo=>console.log('Archivo creado'))
            .catch(e=>console.log(e));
        break;
        default:
            console.log('comando no reconocido');
}
// let parametro=argv[2];
// let base=parametro.split('=')[1];


// console.log(argv2);

// crearArchivo(base)
//    .then(archivo=>console.log('Archivo creado'))
//    .catch(e=>console.log(e));
