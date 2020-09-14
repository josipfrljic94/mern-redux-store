import React from 'react';

import Products from './components/Products';
import Filter  from './components/Filter';
import Cart  from './components/Cart';
<<<<<<< Updated upstream
import store from "./store"
import {Provider} from "react-redux";

=======
>>>>>>> Stashed changes
class App extends React.Component {
constructor(){
  super()
  this.state={
<<<<<<< Updated upstream
    
   
=======
    products:data.products,
    size:"",
    sort:"",
    type:"",
>>>>>>> Stashed changes
    cartProducts:localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")): []
  };
  
}
<<<<<<< Updated upstream
=======
filtertypes(event){
  if(event.target.value===""){
    this.setState({type:event.target.value,products:data.products})
    
  }else{
    this.setState({ type:event.target.value,  
       products: data.products.filter(product=>product.type===event.target.value)}
    )
 
    }
}
sizefilter=(event)=>{
  if(event.target.value===""){
    this.setState({size:event.target.value, products:data.products})
  }
  else{
    this.setState({size:event.target.value,
      products:data.products.filter(product=>product.size.includes(event.target.value)===true)})
>>>>>>> Stashed changes



  // CART  FUNCTION
addtocart=(product)=>{
  const cartProducts= this.state.cartProducts.slice();
  let inCart= false;
cartProducts.forEach(item => {
  if(item.id===product.id){
    item.cart++;
    inCart=true;
   
  }
});
  if(inCart===false){  
        cartProducts.push({...product,cart:1});
  }
  this.setState({cartProducts:cartProducts})
localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}

<<<<<<< Updated upstream
removeProduct=(product)=>{
  const cartProducts= this.state.cartProducts.slice();

=======
sortprice=(event)=>{
 let sort= event.target.value
this.setState((state)=>({
  sort: sort,
  products: state.products.slice().sort((a,b)=>{
    return(
      sort==="lowest" 
    ? a.price >b.price
    ? 1
    :-1
    : sort==='highest'
    ? a.price < b.price
    ? 1
    :-1
    : a.id > b.id
    ? 1
    : -1
    // 
  )})
}))
  }


  // CART  FUNCTION
addtocart=(product)=>{
  const cartProducts= this.state.cartProducts.slice();
  let inCart= false;
cartProducts.forEach(item => {
  if(item.id===product.id){
    item.cart++;
    inCart=true;
   
  }
});
  if(inCart===false){  
        cartProducts.push({...product,cart:1});
  }
  this.setState({cartProducts:cartProducts})
localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}

removeProduct=(product)=>{
  const cartProducts= this.state.cartProducts.slice();

>>>>>>> Stashed changes
this.setState({cartProducts:cartProducts.filter(item=>item.id!== product.id)});
localStorage.setItem("cartProducts",JSON.stringify(cartProducts.filter(item=>item.id!== product.id)))
}

// END CART FUNCTIONS

render(){
  return (
    <Provider store={store}>
    <div className="App">
    <header  >
      <a href='/cart'> Shopping cart</a>
     
    </header>
    <div className='container'>
      <section className='filter-section'>
<<<<<<< Updated upstream
      <Filter  />
=======
      <Filter count={this.state.products.length} type={this.state.type} filtertypes={this.filtertypes.bind(this)} sizefilter={this.sizefilter} size={this.state.size} sortprice={this.sortprice} sort={this.state.sort}/>
>>>>>>> Stashed changes
      <Cart cartProducts={this.state.cartProducts} removeProduct={this.removeProduct}/>
      </section>
     

<<<<<<< Updated upstream
     <Products  addtocart={this.addtocart}/>
=======
     <Products products={this.state.products} addtocart={this.addtocart}/>
>>>>>>> Stashed changes
    
       
      </div>
    </div>
    </Provider>
  )

}
  
}

export default App;
