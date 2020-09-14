import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
           
            <div className='select-container'>
                     <h5>Number of products: {this.props.count}</h5>
                    <h5>Type of product</h5>
                <select value={this.props.type} onChange={this.props.filtertypes}>
                    <option value="">ALL</option>
                    <option value="dress">DRESS</option>
                    <option value="bluse">BLUSE</option>
                </select>
                <h5>Select size</h5>
                <select onChange={this.props.sizefilter} value={this.props.size}>
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                   <option value="M">M</option>
                   <option value="L">L</option>
                   <option value="XL">XL</option>
                </select>
                <h5>SORT BY PRICE</h5>
                <select value={this.props.sort} onChange={this.props.sortprice}>
                    <option value=''>NONE</option>
                    <option value='highest'>HIGHEST</option> 
                    <option value='lowest'>LOWEST</option>
                </select>
               
            </div>
        )
    }
}
