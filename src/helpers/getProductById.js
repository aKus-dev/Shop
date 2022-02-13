import products from "../data/products";

const getProductById = id => {



    return products.find(product => product.id === parseInt(id));
}

export default getProductById;