import React from "react";
import Search from "./Shearch";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    const ubicacion = props.ubc;

    return(
        <div>                      
            <NavLink to        =  "/"
                     className = {({isActive})=>(isActive?"active":undefined)}
            >
                <button>SALIR</button>
            </NavLink>


            <NavLink to        = "/crearVG"
                     className = {({isActive})=>(isActive?"active":undefined)}>
                <button>CREAR</button>
            </NavLink>

            {ubicacion.pathname !== "/home" &&
                <NavLink to        = "/home"
                         className = {({isActive})=>(isActive?"active":undefined)}
                >
                    <button>INICIO</button>
                </NavLink>
            }

            <hr />

            {ubicacion.pathname === "/home"
             ? <Search/>
             : null
            }
        </div>
    );
}

export default Nav;