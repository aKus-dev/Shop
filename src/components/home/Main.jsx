import products from "../../data/products"
import Product from "./Product"


const Main = () => {

    return (
        <div className="main">
           
           {
               products.map(product => <Product key={product.id} {...product} /> )
           }

        </div>
    )
}

export default Main
