import { NavLink } from "react-router-dom";

function Landing (){
    return(
        
        <NavLink to =  "/home"
                 className = {({isActive})=>(isActive?"active":undefined)}
        >
            <button>ENTRAR</button>
        </NavLink>
    );
}

export default Landing;