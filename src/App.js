import React from 'react';

import Products from './components/Products';
import Filter  from './components/Filter';
import Cart  from './components/Cart';
class App extends React.Component {
constructor(){
  super()
  this.state={
    products:data.products,
    
    cartProducts:localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")): []
  };
  
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

this.setState({cartProducts:cartProducts.filter(item=>item.id!== product.id)});
localStorage.setItem("cartProducts",JSON.stringify(cartProducts.filter(item=>item.id!== product.id)))
}

// END CART FUNCTIONS

render(){
  return (
    <div className="App">
    <header  >
      <a href='/cart'> Shopping cart</a>
     
    </header>
    <div className='container'>
      <section className='filter-section'>
      <Filter count={this.state.products.length} type={this.state.type} filtertypes={this.filtertypes.bind(this)} sizefilter={this.sizefilter} size={this.state.size} sortprice={this.sortprice} sort={this.state.sort}/>
      <Cart cartProducts={this.state.cartProducts} removeProduct={this.removeProduct}/>
      </section>
     

     <Products products={this.state.products} addtocart={this.addtocart}/>
    
       
      </div>
    </div>
  )

}
  
}

export default App;
