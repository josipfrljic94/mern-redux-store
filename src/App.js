import React from 'react';
import data from './data.json'
import Products from './components/Products';

class App extends React.Component {
constructor(){
  super()
  this.state={
    products:data.products,
    size:"",
    sort:"",
    type:""
  }
};
render(){
  return (
    <div className="App">
    <header  >
      <a href='/cart'> Shopping cart</a>
     
    </header>
    <div className='container'>
     <Products products={this.state.products}/>
       
      </div>
    </div>
  )

}
  
}

export default App;
