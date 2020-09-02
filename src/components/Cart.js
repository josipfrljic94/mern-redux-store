import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const cartProducts= this.props.cartProducts
        if(cartProducts.length<1){
            return(
                <div className='cart-container'>
                  <h1>Cart is empty</h1> 
                </div>
            )
        }
        else{
            return (
                <div  className='cart-container'>
                    <h5>{`Total: $${cartProducts.reduce((a,c)=> a+ (c.price*c.cart),0)}`}</h5>
                {cartProducts.map( product=>{
                    return(
                        <div key={`${product.id}+${product.title}`} className='cart-product'>
                            
                           <img src={`images/${product.img}.jpg`}></img>
                            <h6>{`${product.cart}X$${product.price}`} </h6>
                            <h6>{`Total:$${product.cart*product.price}`}</h6>
                            <button onClick={()=>this.props.removeProduct(product)} className='btn'>Remove</button>
                        </div>
                    )
                } )}
                </div>
            )

        }
        
    }
}
