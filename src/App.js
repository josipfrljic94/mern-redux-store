import React from 'react';
import data from './data.json'
import Products from './components/Products';
import Filter  from './components/Filter'
class App extends React.Component {
constructor(){
  super()
  this.state={
    products:data.products,
    size:"",
    sort:"",
    type:""
  };
  
}
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

  }
}

sortprice=(event)=>{
 let sort= event.target.value
this.setState((state)=>({
  sort: sort,
  products: state.products.slice().sort((a,b)=>
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
  )
}))

  }
  


render(){
  return (
    <div className="App">
    <header  >
      <a href='/cart'> Shopping cart</a>
     
    </header>
    <div className='container'>
      <section className='filter-section'>
      <Filter count={this.state.products.length} type={this.state.type} filtertypes={this.filtertypes.bind(this)} sizefilter={this.sizefilter} size={this.state.size} sortprice={this.sortprice} sort={this.state.sort}/>
      </section>
     

     <Products products={this.state.products}/>
       
      </div>
    </div>
  )

}
  
}

export default App;
