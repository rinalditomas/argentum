const {Product, Category,User} = require ("./models/index");

//PRODUCTOS
const yerba1= {
    nombre: "Playadito", //String
    precio: 200, //Integer
    imagen: "https://i.ibb.co/GMwFJrS/yerba1.jpg", //String
    descripcion: "Yerba Mate Playadito 500grs. Elaborada en Corrientes desde 1926.", //Text
    disponible: true, //Boolean
    stock: 5, //Integer
};

const yerba2= {
    nombre: "La Mercerd" , //String
    precio: 250, //Integer
    imagen: "https://i.ibb.co/tmr52tH/yerba2.jpg", //String
    descripcion: "Yerba Mate La Merced 500grs. Disponible en varios sabores.", //Text
    disponible: true, //Boolean
    stock: 7, //Integer
};
const yerba3= {
    nombre: "Rosamonte" , //String
    precio: 180, //Integer
    imagen: "https://i.ibb.co/hBz4j7Y/yerba3.jpg", //String
    descripcion: "Yerba Mate Rosamonte 500grs. Variedad: Suave o Tradicional." , //Text
    disponible: true, //Boolean
    stock: 10 , //Integer
};
const yerba4= {
    nombre: "Unión" , //String
    precio: 230, //Integer
    imagen: "https://i.ibb.co/1775ss4/yerba4.jpg", //String
    descripcion: "Yerba Mate Unión Suave 500grs. Elaborada con palo, libre de gluten.", //Text
    disponible: true, //Boolean
    stock: 4, //Integer
};
const vino1= {
    nombre: "Elementos Malbec" , //String
    precio: 250, //Integer
    imagen: "https://i.ibb.co/QmKRfv9/vino1.jpg", //String
    descripcion: "Vino Elementos Malbec. Cosecha 2019, 750ml." , //Text
    disponible: true, //Boolean
    stock: 7, //Integer
};
const vino2= {
    nombre: "Hereford Malbec", //String
    precio: 190, //Integer
    imagen: "https://i.ibb.co/VSP1yv0/vino2.jpg", //String
    descripcion: "Vino Hereford Varietales Malbec. Presentación de 750ml.", //Text
    disponible: true, //Boolean
    stock: 8, //Integer
};
const vino3= {
    nombre: "Alma Mora Malbec", //String
    precio: 240, //Integer
    imagen: "https://i.ibb.co/mFM06LM/vino3.jpg", //String
    descripcion: "Vino Alma Mora Malbec. Cosecha 2018, 750ml.", //Text
    disponible: true, //Boolean
    stock: 7, //Integer
};
const vino4= {
    nombre: "Cafayate Malbec" , //String
    precio: 270, //Integer
    imagen: "https://i.ibb.co/Rb9sg9M/vino4.jpg", //String
    descripcion: "Vino Cafayate Piattelli Malbec. Presentación 750ml.", //Text
    disponible: true, //Boolean
    stock: 6, //Integer
};
const mate1= {
    nombre: "Mate artesanal", //String
    precio: 350, //Integer
    imagen: "https://i.ibb.co/dj4m14G/mate1.jpg", //String
    descripcion: "Mate artesanal, con bombilla y base de alpaca." , //Text
    disponible: true, //Boolean
    stock: 15, //Integer
};
const mate2= {
    nombre: "Mate artesanal", //String
    precio: 450, //Integer
    imagen: "https://i.ibb.co/2Z0B1n8/mate2.jpg", //String
    descripcion: "Mate artesanal, con bombilla, base y decoración de alpaca.", //Text
    disponible: true, //Boolean
    stock: 10, //Integer
};
const mate3= {
    nombre: "Mate artesanal", //String
    precio: 520, //Integer
    imagen: "https://i.ibb.co/x7WWQLj/mate3.jpg", //String
    descripcion: "Mate artesanal. Borde y bombilla labradas, con base de cuero.", //Text
    disponible: true, //Boolean
    stock: 8, //Integer
};
const mate4= {
    nombre: "Mate", //String
    precio: 320, //Integer
    imagen: "https://i.ibb.co/prcBJq4/mate4.jpg", //String
    descripcion: "Mate de acero inoxidable. Incluye bombilla y cepillo limpia bombilla.", //Text
    disponible: true, //Boolean
    stock: 20, //Integer
};
const alfajores1= {
    nombre: "Havanna", //String
    precio: 430, //Integer
    imagen: "https://i.ibb.co/Xzd7bD4/alfajores1.jpg", //String
    descripcion: "Alfajores Havanna. Caja de 6 unidades, variedad: Dulce de Leche o Chocolate.", //Text
    disponible: true, //Boolean
    stock: 20, //Integer
};
const alfajores2= {
    nombre: "Balcarce", //String
    precio: 410, //Integer
    imagen: "https://i.ibb.co/ZLfCp9W/alfajores2.jpg", //String
    descripcion: "Alfajores Balcarce. Caja de 6 unidades, variedad: Dulce de Leche, Chocolate y Nuez", //Text
    disponible: true, //Boolean
    stock: 22, //Integer
};

const alfajores3= {
    nombre: "Guaymallén", //String
    precio: 270, //Integer
    imagen: "https://i.ibb.co/dc6jkd9/alfajores3.jpg", //String
    descripcion: "Alfajores Guaymallén. Caja de 40 unidades, variedad: Dulce de Leche o Chocolate.", //Text
    disponible: true, //Boolean
    stock: 30, //Integer
};

const alfajores4= {
    nombre: "AlFerneé", //String
    precio: 620, //Integer
    imagen: "https://i.ibb.co/mD49XPg/alfajores4.jpg", //String
    descripcion: "Alfajores AlFerneé. Caja de 6 unidades, sabor a Fernet.", //Text
    disponible: true, //Boolean
    stock: 15, //Integer
};
const artesanias1= {
    nombre: "Vasija", //String
    precio: 480, //Integer
    imagen: "https://i.ibb.co/JkxwYcQ/artesanias1.jpg", //String
    descripcion: "Vasija de barro. Hecha artesanalmente.", //Text
    disponible: true, //Boolean
    stock: 14, //Integer
};
const artesanias2= {
    nombre: "Olla", //String
    precio: 760, //Integer
    imagen: "https://i.ibb.co/QdyKv32/artesanias2.jpg", //String
    descripcion: "Olla de barro. Hecha artesanalmente, incluye tapa.", //Text
    disponible: true, //Boolean
    stock: 12, //Integer
};
const artesanias3= {
    nombre: "Cacerola", //String
    precio: 840, //Integer
    imagen: "https://i.ibb.co/QNmm1Sz/artesanias3.jpg", //String
    descripcion: "Cacerola de barro y cerámica, incluye manijas y tapa.", //Text
    disponible: true, //Boolean
    stock: 8, //Integer
};
const artesanias4= {
    nombre: "Cacerola", //String
    precio: 770, //Integer
    imagen: "https://i.ibb.co/MPtH0rG/artesanias4.jpg", //String
    descripcion: "Cacerola de barro, sin tapa. Hecha artesanalmente.", //Text
    disponible: true, //Boolean
    stock: 15, //Integer
};
const asador1= {
    nombre: "Utensillos de Asador", //String
    precio: 420, //Integer
    imagen: "https://i.ibb.co/s9Yqbjn/asador1.jpg", //String
    descripcion: "Utensillos de asador. Set de 3 piezas", //Text
    disponible: true, //Boolean
    stock: 12, //Integer
};
const asador2= {
    nombre: "Asador Cruz", //String
    precio: 1700, //Integer
    imagen: "https://i.ibb.co/Sc808dr/asador2.jpg", //String
    descripcion: "Asador tipo Cruz, con ganchos. Fácil de transportar y limpiar.", //Text
    disponible: true, //Boolean
    stock: 6, //Integer
};
const asador3= {
    nombre: "Asador AllInOne", //String
    precio: 3200, //Integer
    imagen: "https://i.ibb.co/wMgDLCt/asador3.jpg", //String
    descripcion: "Asador tipo Cruz y Parrilla, todo en uno. Perfecto encastre y super práctico.", //Text
    disponible: true, //Boolean
    stock: 11, //Integer
};
const asador4= {
    nombre: "Parrilla", //String
    precio: 1500, //Integer
    imagen: "https://i.ibb.co/2hYyZTk/asador4.jpg", //String
    descripcion: "Parrilla fija, con emparrillado. Realizado en hierro.", //Text
    disponible: true, //Boolean
    stock: 13, //Integer
};
const cinturon1= {
    nombre: "Cinturón Blanco", //String
    precio: 380, //Integer
    imagen: "https://i.ibb.co/kB9Fh4g/cinturon1.jpg", //String
    descripcion: "Cinturón blanco, realizado a mano.", //Text
    disponible: true, //Boolean
    stock: 7, //Integer
};
const cinturon2= {
    nombre: "Cinturón Marrón", //String
    precio: 460, //Integer
    imagen: "https://i.ibb.co/LDKFgDd/cinturon2.jpg", //String
    descripcion: "Cinturón marrón, realizado a mano.", //Text
    disponible: true, //Boolean
    stock: 3, //Integer
};
const cinturon3= {
    nombre: "Cinturón Tejido", //String
    precio: 540, //Integer
    imagen: "https://i.ibb.co/WzRn7d4/cinturon3.jpg", //String
    descripcion: "Cinturón artesanal tejido. Varias medidas.", //Text
    disponible: true, //Boolean
    stock: 17, //Integer
};
const cinturon4= {
    nombre: "Cinturón bordado", //String
    precio: 620, //Integer
    imagen: "https://i.ibb.co/8Dtkjr6/cinturon4.jpg", //String
    descripcion: "Cinturón de cuero, bordado a mano.", //Text
    disponible: true, //Boolean
    stock: 18, //Integer
};
const ddl1={
    nombre: "Dulce de Leche", //String
    precio: 150, //Integer
    imagen: "https://i.ibb.co/Kr8b3Xz/ddl1.jpg", //String
    descripcion: "Dulce de Leche marca La Serenisima. Estilo tradicional, 400grs.", //Text
    disponible: true, //Boolean
    stock: 33, //Integer
};
const ddl2= {
    nombre: "Dulce de Leche", //String
    precio: 150, //Integer
    imagen: "https://i.ibb.co/zsQJZBF/ddl2.jpg", //String
    descripcion: "Dulce de Leche marca Sancor. Receta clásica, 400grs.", //Text
    disponible: true, //Boolean
    stock: 28, //Integer
};const ddl3= {
    nombre: "Dulce de Leche", //String
    precio: 180, //Integer
    imagen: "https://i.ibb.co/vkd4yWC/ddl3.jpg", //String
    descripcion: "Dulce de Leche marca Vacalín. Presentación original, 450grs.", //Text
    disponible: true, //Boolean
    stock: 20, //Integer
};
const ddl4= {
    nombre: "Dulce de Leche", //String
    precio: 240, //Integer
    imagen: "https://i.ibb.co/0K5nVXF/ddl4.jpg", //String
    descripcion: "Dulce de Leche marca San Ignacio. Presentación original, 450grs.", //Text
    disponible: true, //Boolean
    stock: 21, //Integer
};
//------------------------------------------------------
//CATEGORIAS
const cat1 ={
    nombre:'vinos'
}
const cat2 ={
    nombre:'alfajores'
}
const cat3 ={
    nombre:'yerbas'
}
const cat4 ={
    nombre:'dulce de leche'
}
const cat5 ={
    nombre:'mates'
}
//-------------------------------------------------
//USUARIOS
const user1={
    name: 'tomas',
    lastName:'rinaldi',
    email:'tomasrinaldi@argentum.com',
    password:12345678

}
const user2={
    name: 'florencia',
    lastName:'paez',
    email:'florenciapaez@argentum.com',
    password:12345678

}
const user3={
    name: 'julia',
    lastName:'selma',
    email:'juliaselma@argentum.com',
    password:12345678

}
const user4={
    name: 'maria',
    lastName:'cortina',
    email:'marcortina@argentum.com',
    password:12345678

}
const user5={
    name: 'damian',
    lastName:'almanza',
    email:'damianalmanza@argentum.com',
    password:12345678

}
const user6={
    name: 'augusto',
    lastName:'morales',
    email:'augustomorales@argentum.com',
    password:12345678

}
const user7={
    name: 'roberto',
    lastName:'villa',
    email:'robervilla@argentum.com',
    password:12345678

}
const user8={
    name: 'admin',
    lastName:'admin',
    email:'admin@argentum.com',
    password:12345678,
    isAdmin:true
}
//--------------------------------------------------------
const productArray =[yerba1, yerba2, yerba3, yerba4, mate1, mate2, mate3, mate4, vino1, vino2, vino3, vino4, artesanias1, artesanias2, artesanias3, artesanias4, alfajores1, alfajores2, alfajores3, alfajores4, asador1, asador2, asador3, asador4, cinturon1, cinturon2, cinturon3, cinturon4, ddl1, ddl2, ddl3, ddl4]
const userArray=[user1,user2,user3,user4,user5,user6,user7,user8]
const categoryArray = [cat1,cat2,cat3,cat4,cat5]

//---------------------------------------------------------------

let productPromise = () => Product.bulkCreate(productArray)
  .then(res => {
    console.log(`-->productos creados`);
    return res;
  });
  
let categoryPromise = () => Category.bulkCreate(categoryArray)
  .then(res => {
    console.log(`-->productos creados`);
    return res;
  });
let userPromise = () => User.bulkCreate(userArray)
  .then(res => {
    console.log(`-->productos creados`);
    return res;
  });


  categoryPromise()
  //.then(()=>categoryPromise()) 
  //.then(()=>userPromise()) 
  .then(() => console.log(`----Seed terminado----`));