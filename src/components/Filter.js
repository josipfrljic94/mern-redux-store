import React, { Component } from 'react';
import { connect } from "react-redux";
import {filterProductByTypeSize,sortProducts} from "../actions/getProduct"

 class Filter extends Component {
    render() {
        return (
            !this.props.filteredProducts ? (
                <h1>Loading...</h1>
              ) : (
            <div className='select-container'>
                   <form>
                   <select value={this.props.typeOf} name="type" onChange={(e)=>this.props.filterProductByTypeSize(this.props.products,"type",e.target.value)}>
                    <option value="">ALL</option>
                    <option value="dress">DRESS</option>
                    <option value="bluse">BLUSE</option>
                </select>
                <h5>Select size</h5>
                <select  value={this.props.sizes} name="sizes" onChange={(e)=>this.props.filterProductByTypeSize(this.props.products,"sizes",e.target.value)} >
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                   <option value="M">M</option>
                   <option value="L">L</option>
                   <option value="XL">XL</option>
                </select>

                   </form>
                    <h5>Type of product</h5>
               
                <h5>SORT BY PRICE</h5>
                <select value={this.props.sort} onChange={(e)=>this.props.sortProducts(this.props.filteredProducts,e.target.value)}>
                    <option value="" >NONE</option>
                    <option value='highest'>HIGHEST</option> 
                    <option value='lowest'>LOWEST</option>
                </select>
               
            </div>
              )
        )
    }
}
export default connect((state)=>({
    typeOf:state.products.typeOf,
    size: state.products.size,
    sort:state.products.sort,
    products:state.products.items,
    filteredProducts:state.products.filteredItems,
  
}),{filterProductByTypeSize,sortProducts}

)(Filter);