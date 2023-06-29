import * as ACTION from "../actions/actionsTypes";

const initialState = {
    videogamesAll : [],
    videogameId   : {},
    videogamesHome: [],
    agregadoCorrecto : 0,
};

const filtrarAgregadoHome = (payload, aux) =>{   
    if(!aux.length) return payload;
                
    let seleccionados = [];

    seleccionados = payload.filter((game)=>{
        const existe = aux.some((gameHome)=>{
            return (gameHome.id === game.id)
        })
        // console.log(game.id, "existe", existe)
        return !existe;
    })

    return seleccionados
}

const reducer = (state = initialState, action) =>{
    const {type, payload} = action;
    switch (type) {
        case  ACTION.GET_ALLVIDEOGAMES :{
            return({
                ...state,
                videogamesAll : payload,
            })
        }

        case ACTION.GET_ONEVIDEOGAME :{
            return({
                ...state,
                videogameId : payload
            })
        }

        case ACTION.GET_ADDATHOME:{
            const aux = state.videogamesHome;            

            if(!payload.vacio){
                const agregar = filtrarAgregadoHome(payload,aux);

                return({
                    ...state,                    
                    videogamesHome : aux.concat(agregar),
                    agregadoCorrecto : agregar.length,
                });
            }
            else
                return({
                    ...state,
                    agregadoCorrecto : 0,
                });                
        }

        case ACTION.CLEAR_STATE:{
            return({
                ...state,
                [payload] : [],
            });
        }
    
        default:{
            return(
                {...state }
            );
        }
    }
}

export default reducer;