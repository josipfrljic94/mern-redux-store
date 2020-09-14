import { FETCH_PRODUCTS, SORT_PRODUCTS,FILTER_PRODUCTS_BY_TYPE_SIZE}  from "../types";


export const getProductsReducer=(state={},action)=>{
    switch(action.type){
        case SORT_PRODUCTS:
            return{
                ...state,
                    sort:action.payload.sort,
                   filteredItems: action.payload.items,
            };
        case FILTER_PRODUCTS_BY_TYPE_SIZE:
            return{
                ...state,
                typeOf: action.payload.typeOf,
                size: action.payload.size,
                filteredItems: action.payload.items,
            };
        

        case FETCH_PRODUCTS:
            return{items:action.payload,filteredItems:action.payload};
        default:
            return state;
    }
}