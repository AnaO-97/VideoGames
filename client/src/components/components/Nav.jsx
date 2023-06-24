import React from "react";
import SearchBar from "./Shearch";
import { NavLink } from "react-router-dom";
    
const Nav = (props) => {
    return(
        <div>
            <Search onSearch={this.props.onSearch} />
            <hr />            

            <NavLink to        =  "/"
                     className = {({isActive})=>(isActive?"active":undefined)}
            >
                <button>SALIR</button>
            </NavLink>


            <NavLink to        = "/crearVG"
                     className = {({isActive})=>(isActive?"active":undefined)}>
                <button>CREAR</button>
            </NavLink>

            <NavLink to        = "/home"
                     className = {({isActive})=>(isActive?"active":undefined)}>
                <button>HOME</button>
            </NavLink>

            <hr />
        </div>
    );
}

export default Nav;