import React from "react";
import Search from "./Shearch";
import { NavLink } from "react-router-dom";

const Nav = () => {
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

            {<NavLink to        = "/home"
                     className = {({isActive})=>(isActive?"active":undefined)}>
                <button>INICIO</button>
            </NavLink>}

            <hr />

            <Search/>
        </div>
    );
}

export default Nav;