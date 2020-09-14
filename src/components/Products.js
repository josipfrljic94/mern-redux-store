import React, { Component } from 'react'
import {connect} from "react-redux";
import {fetchProducts} from "../actions/getProduct"


 class Products extends Component {
    
     
     componentDidMount(){
         this.props.fetchProducts();
     }
    render() {
        return (

           
            <div style={{width:"80%"}}>
               
              {!this.props.products ? (<h1>Loading...</h1>) 
              : (
               
             <section className='products-container'>
                  <h3>{this.props.products.length}</h3>
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
            )}
            </div>
            
        )
    }
}
export default connect((state)=>({products:state.products.filteredItems}),{
    fetchProducts})
    (Products);