import { SAVE_DATA } from "./Constants";

const initialState = {
    data:{},
    count:0
}

export default (state = initialState, action:{type:string,payload:string | undefined}) => {
    console.log("action",action.payload)
    switch (action.type) {
        case SAVE_DATA:
            return { 
            ...state,data:action.payload,
            };
     
        default:
            return state;
    }
}