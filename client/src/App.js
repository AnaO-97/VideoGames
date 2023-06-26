import Nav from "./components/components/Nav";
import { Home, Landing, Detail } from "./views/index";
import { Switch, Route, useLocation  } from "react-router-dom";

function App() {
  const ubicacion = useLocation();
  return (    
    <div> 
        {ubicacion.pathname !== "/" && <Nav ubc={ubicacion}/>}

        <Switch>       
        <Route exact path = "/"
               render = {() => <Landing/>} 
        />
          
        <Route path = "/home"
               render = {() => <Home/>}
        />                

        {/* <Route path = "/create"
                render = {() => <FormPokemon/>}
        />  */}     

        <Route  path   = "/videogame/detail/:idVideogame"
                render = {({match}) => <Detail id = {match.params.idVideogame}/>}
        />
      </Switch>
  </div>);

}

export default App;
