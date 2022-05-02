import { SUCCESS,FAILURE,REQUEST } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch(type){
    case REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false,
        products:[],
        filterData:[]
      }
    case SUCCESS:
      return {
        ...state,
        isLoading:false,
        isError:false,
        products:payload,
        filterData:payload
      }
    case FAILURE:
      return {
        ...state,
        isLoading:false,
        isError:true,
        products:[],
        filterData:[]
      }
    default:
      return state
  }
};
export { reducer };
