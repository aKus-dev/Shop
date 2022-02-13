import React from 'react'
import { useParams } from 'react-router-dom'
import getProductById from '../helpers/getProductById'
import AddToCart from './AddToCart';

const ProductScreen = () => {

    const { id } = useParams();

    const { imgPath, name, desc, price } = getProductById(id);

    return (
        <div className="product-screen">
            <img className="product-view" src={imgPath} alt={name} />

            <div className="product-info">
                <h1>{name}</h1>
                <p>{desc}</p>
                <span>${price}</span>

                <AddToCart id={id} name={name} price={price} imgPath={imgPath} />
            </div>
        </div>
    )
}

export default ProductScreen
