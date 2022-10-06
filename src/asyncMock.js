const products = [
    { 
        id: 1, 
        name: 'Camara de fotos Nikon', 
        price: 5000, 
        category: {
            id: 2,
            description: "Electronica"
        }, 
        img:'https://live.staticflickr.com/8380/8498180386_cc1de42bb0_b.jpg', 
        stock: 3, 
        description:'Camara de fotos profesional'
    },
    { 
        id: 2, 
        name: 'Harry Potter y la camara de los secretos', 
        price: 1000, 
        category: {
            id: 3,
            description: "Libros"
        }, 
        img:'https://imagessl7.casadellibro.com/a/l/t0/57/9788478884957.jpg', 
        stock: 5, 
        description:'Es el segundo libro de la saga de Harry Potter'
    },
    { 
        id: 3, 
        name: 'Plaquetas para mascotas', 
        price: 200, 
        category: {
            id: 4,
            description: "Mascotas"
        }, 
        img:'https://ae01.alicdn.com/kf/HTB1OmiFuv1TBuNjy0Fjq6yjyXXaj/Glitter-Personalized-Dog-ID-Tag-Customized-Bone-Shape-Name-Tag-Plate-Pet-Dog-Accessories-Collar-Decoration.jpg_640x640.jpg', 
        stock: 3, 
        description:'Plaquetas con nombre para mascotas'
    },
    { 
        id: 4, 
        name: 'El señor de los anillos: Retorno del Rey', 
        price: 1000, 
        category: {
            id: 3,
            description: "Libros"
        }, 
        img:'https://4.bp.blogspot.com/-B_LWEU2nQpY/WCKXHywoULI/AAAAAAAABnQ/vvkX8h3Cax0lvSYoiM2eQTxd7KCbloxTQCK4B/s1600/else%25C3%25B1ordelosanilloselretornodelrey.jpg', 
        stock: 5, 
        description:'Tercer libro de la saga de Tolkien'
    },
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductsByCategoryId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(p => p.category.id == id));
        }, 500);
    });
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(p => p.id == id));
        }, 500);
    });
}