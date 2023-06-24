import { Home } from "./views/index";
import { Switch, Route, useLocation  } from "react-router-dom";

function App() {
  const ubicacion = useLocation();
  return (<div> 
    {/* {ubicacion.pathname !== "/" && <NavBar/>} */}
    
      <Switch>       
        {/* <Route exact path = "/"
                render = {() => <Landing/>} 
        /> */}
          
        <Route path = "/home"
                render = {() => <Home/>}
        />                

        {/* <Route path = "/create"
                render = {() => <FormPokemon/>}
        />       

        <Route path   = "/detail/:idPok"
                render = {
                ({match}) => <Detail idPok = {match.params.idPok}/>
              }
        /> */}
      </Switch>
  </div>);

}

export default App;
