import React, {useState, useEffect, useContext} from "react";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './ItemDetail.css'
const ItemDetail = ({data}) => {
    const {title, description, image, price, stock, quantity} = data;
    const [cart, setCart] = useState({});//para el condicional
    const {cartProducts, addProductToCart} = useContext(CartContext)
    console.log("Productos en el carrito: ", cartProducts)
    //funcion del padre ejecutada por el hijo
    const onAdd = (quantity) =>{
        setCart(quantity);
        addProductToCart(data);
        console.log(data)
    }
    /////////////////////////////////////////
    return(
        <div className='ProductDetail'>
            <img src= {image} ></img>
            <div className='ProductDetailContent'>
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>Precio: ${price}</h3>
                <h3>Stock Disponible: {stock}</h3>
                    { //condicional 
                        cart.id?
                        <div className='quantities'>
                            <div><Link to={`/`}><button>Ver mas productos</button></Link></div>
                            
                            <Link to={`/cart`}><button>Ver Compra Actual</button></Link>
                        </div>:
                        <div className="quantities">
                            <ItemCount stock={stock} onAdd={onAdd} quantity={quantity}/>
                        </div>
                        //////////
                    }
            </div>
        </div>
    )
}

export default ItemDetail;