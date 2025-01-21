const fs = require('fs');


const registrar = (nombre, edad, tipo, color, enfermedad ) => {
    
    const contenido = fs.readFileSync('./citas.json', 'utf8');
    const citas = JSON.parse(contenido);
    
    const nuevaCita = {nombre, edad, tipo, color, enfermedad};
    
    citas.push(nuevaCita);

    fs.writeFileSync('./citas.json', JSON.stringify(citas, null, 2));
    console.log('cita guardada en citas.json');
    
};

const leer = ()=> {
    const contenido = fs.readFileSync('./citas.json', 'utf8');
    const citas = JSON.parse(contenido);
    console.log('Citas registradas', citas);
};

module.exports = { registrar , leer};