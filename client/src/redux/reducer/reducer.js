import * as ACTION from "../actions/actionsTypes";

const initialState = {
    videogamesAll : [],
    videogamesHome: [],
};

const reducer = (state = initialState, action) =>{
    const {type, payload} = action;
    switch (type) {
        case  ACTION.GET_ALLVIDEOGAMES :{
            return({
                ...state,
                videogamesAll : payload,
            })
        }

        case ACTION.GET_ADDATHOME:{
            return({
                ...state,
                videogamesHome : [...state.videogamesHome, payload]
            })
        }
    
        default:{
            return(
                {...state }
            );
        }
    }
}

export default reducer;