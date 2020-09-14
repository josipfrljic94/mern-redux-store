import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <section className='products-container'>
                {this.props.products.map(product=>{
            return(
            <div key={`${product.id}and${product.title}`}>
                   
                    <img src={`images/${product.img}.jpg`} alt={product.title}></img>

                    <footer>
                    <h3>{product.title}</h3>
                    
                    <h5>{`$${product.price}`}</h5>
                    <button onClick={()=>this.props.addtocart(product)}  className='btn'>Add To Cart</button>

                    </footer>
                   

            </div>
                 )
            })}
            </section>
        )
    }
}
