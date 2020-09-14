import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TYPE_SIZE,SORT_PRODUCTS} from "../types"

export const fetchProducts=()=>async(dispatch)=>{
   const res= await fetch("/api/products")
   const data= await res.json();
   dispatch({
       type:FETCH_PRODUCTS,
       payload:data 
   })
}

let filterObj={type:"",
sizes:""
};
export const filterProductByTypeSize=(products,name,value)=>(dispatch)=>{
    let productsFiltered=products.slice();
   
    
    const filterCond={[name] : value}

    filterObj= Object.assign(filterObj,filterCond)
   console.log(filterObj)
    let sizes= filterObj.sizes;
    let typeOf= filterObj.type;
    if (sizes!==""){
        productsFiltered= productsFiltered.filter(p=>p.size.includes(filterObj.sizes)===true)
    }
   
    if(typeOf!==""){
        productsFiltered=productsFiltered.filter(p=>p.type===typeOf)
    }
    dispatch({
        type:FILTER_PRODUCTS_BY_TYPE_SIZE,
        payload:{
            typeOf:typeOf,
            sizes:sizes,
            items:productsFiltered 
        
          
        }
    })
  
}


export const sortProducts=(filterProductByType,sort)=>(dispatch)=>{
    const sortedProducts= filterProductByType.slice(); 
    dispatch({
       type:SORT_PRODUCTS,
       payload:{
           sort,
           items: sort!=="" ? 
           sort==="lowest" ?
            sortedProducts.sort(function(a,b){return a.price-b.price})
            :
            sortedProducts.sort(function(a,b){return b.price-a.price})
            : 
            filterProductByType
           }

           
        
       
       
        })}
