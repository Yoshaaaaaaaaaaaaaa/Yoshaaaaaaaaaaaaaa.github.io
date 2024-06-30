const projectData = {
    Proyecto1: {
        image: './Imagenes/Proyecto.JPG', 
        description: 'El 1er proyecto que nos toco realizar fue hacer que esta calculadora fuera capaz de realizar las funciones basicas de suma, resta, multiplicacion y division',
        texto:'Link directo al proyecto',
        hyperlink: 'https://popcode.org/?snapshot=cb5d506c-190c-47d3-b28c-bec7c2d9513c',
    },
    Proyecto2: {
        image: './Imagenes/Proyecto2.JPG',
        description: 'El 2do proyecto realizado se trataba de tomar un tema que nos gustara y realizaramos una pagina con toda la información relevante, pero utilizando funciones de CSS para editarlas',
        texto:'Link directo al proyecto',
        hyperlink:'https://popcode.org/?snapshot=bc011ecf-46ee-4f1d-8d4c-036fedd125e7'
    },
    Proyecto3: {
        image: './Imagenes/Proyecto3.JPG', 
        description: 'El 3er proyecto se enfocaba nuevamente en la creación de una pagina web; pero en esta ocasion se usaria las propiedades div, flex y multiples atributos para hacerla.',
        texto:'Link directo al proyecto',
        hyperlink:'https://popcode.org/?snapshot=5025d5c5-7da3-4130-a257-a299ee90ef8a'
    },
    Proyecto4: {
        image: './Imagenes/Proyecto4.JPG', 
        description: 'El 4to y penultimo proyecto se trataba del uso de los comandos del querySelector para que nuestro "Juego" de Mario; tengan las funcionalidades del juego original: moverse, saltar, crecer o encogerse.',
        texto:'Link directo al Drive para visualizarlo y editarlo a su gusto',
        hyperlink:'https://drive.google.com/file/d/1WeV8ArVSfcdsIdZYUx38_Igxh1M_5Roe/view?usp=sharing',
    
    },
    Proyecto5: {
        image: './Imagenes/Proyecto5.JPG', 
        description: 'El 5to y ultimo proyecto se trataba del uso de usar las condiciones de loops y el contendor de arrays para crear una galeria de foto que pudiera incluir cualquier foto con una leyenda relacionada a la imagen',
        texto:'Link directo al Drive para visualizarlo y editarlo a su gusto',
        hyperlink:'https://drive.google.com/file/d/1R_4OR97ah0mVgVSACVLpBEVtZCpnuY2g/view?usp=sharing',
}
};


function showProjects(projectName) {
    const projectInfo = projectData[projectName];
    document.getElementById('project-image').src = projectInfo.image;
    document.getElementById('project-description').textContent = projectInfo.description;
    document.getElementById('Link').textContent= projectInfo.texto
    document.getElementById('Link').href = projectInfo.hyperlink
}