import Itemsnew from "./components/Itemsnew";

const Products = [
    {
    id:1,
    nombre:"bombacha con encaje",
    precio: 1700,
    stock: 3,
    img:"../src/img/bombachaconencaje.png",
    },
    {
    id:2,
    nombre:"Bombachones",
    precio: 1200,
    stock: 6,
    img:"../src/img/bombachones.png",
    },
    {
    id:3,
    nombre:"Conjunto negro",
    precio: 800,
    stock: 9,
    img:"../src/img/conjunto negro con encaje.png",
    },
    {
    id:4,
    nombre:"Conjunto Blanco",
    precio: 750,
    stock: 10,
    img:"../src/img/conjuntoblanco.png",
    },
]

 export const getProducts = ()=> {
    return new Promise ((Resolve , reject)=> {
        setTimeout (() => {
            Resolve(Products); 
        }, 2000 );
    });
};


 export const getProducto = (Productsid)=> {
    return new Promise ((Resolve , reject) => {
        setTimeout (()=> {
            const newitem = Products.filter(Products => Products.id === Productsid)
            if (newitem) {
            Resolve(newitem)
            }else {
            reject ("no se en contro ningun item");
            }
        }, 2000);
    });
 };