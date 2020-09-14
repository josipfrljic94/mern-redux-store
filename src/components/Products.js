import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (


           
            <div style={{width:"80%"}}>
               
              {!this.props.products ? (<h2>Loading...</h2>) 
              : (
               
             <section className='products-container'>
<<<<<<< HEAD
             
=======
                  <h4>{this.props.products.length}</h4>

>>>>>>> 42f650bb0c47607f98e2bb3bdd0415e37dd19130
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
