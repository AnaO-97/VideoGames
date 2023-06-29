import { useState } from "react";

function Landing (){
    const [inputs, setInputs] = useState({
        name : "",
        email : "",
        contraseña : "",
    })

    const handleSubmit = (evento)=> {
        evento.preventDefault();

        console.log(inputs)
    };

    const handleChange = (evento)=> {
        const propCmabio  = evento.target.name;
        const valorCambio = evento.target.value;

        setInputs({
            ...inputs,
            [ propCmabio ] : valorCambio,
        })
    };

    return(
        <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Nombre:</label>
          <input type       = 'text' 
                 name       = 'name'
                 value      = {inputs.name}
                 onChange   = {handleChange}
                //  className  = {errors.name && 'warning'}
                 placeholder= 'Escribe tu nombre...'
          />
          {/* {errors.name && <p className='danger'>{errors.name} </p>}  */}
  
          <label htmlFor='email'>Correo Electrónico:</label>
          <input type       = 'text' 
                 name       = 'email'
                 value      = {inputs.email}
                 onChange   = {handleChange}
                //  className  = {errors.email && 'warning'}
                 placeholder= 'Escribe tu email...'
  
          />
          {/* {errors.email && <p className='danger'>{errors.email} </p>}  */}
  
          <label htmlFor='contraseña'>Contraseña:</label>
          <input type       = 'text' 
                 name       = 'contraseña'
                 value      = {inputs.contraseña}
                 onChange   = {handleChange}
                //  className  = {errors.contraseña && 'warning'}
                 placeholder= 'Escribe tu contraseña...'

          />
          {/* {errors.message && <p className='danger'>{errors.message} </p>}  */}
  
          <button type = 'submit'>Registrarse</button>
        </form>
      </div>  
    );
}

export default Landing;

{/* <NavLink to =  "/home"
className = {({isActive})=>(isActive?"active":undefined)}
>
<button>ENTRAR</button>
</NavLink> */}