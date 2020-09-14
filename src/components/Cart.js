import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            isShowed:false,
            name:"",
            email:"",
            adress:""
        }
    }
    handleInput=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    createOrder=(e)=>{
        e.preventDefault();
        const order={

        }
    }
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

                    {/* price of all products */}
                    <h5>{`Total: $${cartProducts.reduce((a,c)=> a+ (c.price*c.cart),0)}`}</h5>
                    <button onClick={()=>this.setState({isShowed:true})}>Buy</button>
                {cartProducts.map( product=>{
                    return(
                        // cart product
                        <div key={`${product.id}+${product.title}`} className='cart-product'>
                            
                           <img src={`images/${product.img}.jpg`}></img>
                            <h6>{`${product.cart}X$${product.price}`} </h6>
                            <h6>{`Total:$${product.cart*product.price}`}</h6>
                            <button onClick={()=>this.props.removeProduct(product)} className='btn'>Remove</button>
                        </div>
                    )
                } )}
                {this.state.isShowed ? 
                <div className='form-container'>
                    <form>
                         <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" name='email' required onChange={this.handleInput}/>
                
                        </div>

                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name='name' required onChange={this.handleInput}/>
                
                        </div>

                        <div class="form-group">
                            <label for="adress">Adress</label>
                            <input type="text" class="form-control" id="adress" name='adress' required onChange={this.handleInput}/>
                
                        </div>
                        <button type='submit'>Submit</button>

                </form>

                </div>
                : ''}
                </div>
            )

        }
        
    }
}
