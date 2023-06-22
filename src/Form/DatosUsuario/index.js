import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { ValidarEmail, validarPassword } from "./validaciones";


const DatosUsuario = ({updateStep}) => {

  const [email, setEmail] =  useState({value: "", valid: null})
  const [password, setPassword] =  useState({value: "", valid: null})

  /*   constructor(props){
    super(props);
    this.state = {
      email: {
        value: 'Harland',
        valid: true
      },
      password: {
        value:'dsf',
        valid: true
      }

    } */

  

    return <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}

        onSubmit={(e) => {
          e.preventDefault();
          console.log(email,password);
          if(email.valid && password.valid){
            console.log("Siguiente formulario");
            updateStep(1);
          }else{
            console.log("No hacer nada");
          }
        }}//Se puede porque esta viviendo dentro de un form
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={email.valid == false} //Si password.valid == false se cumple se vuelve un true en caso de que haya un error
          helperText={!email.valid == false && "Ingresa un correo electrónico válido"}
          value = {email.value} //Tiene un valor por defecto del hook
          onChange={ (input) => {
            const email =  input.target.value;
            const valido =  ValidarEmail(email);
            setEmail({value: email, valid:valido})
          }} //Es la manera para pdder hacer el componente controlado
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          error= {password.valid == false} //Si password.valid == false se cumple se vuelve un true en caso de que haya un error
          helperText= {!password.valid == false && "Ingresa una contraseña válida, al menos 8 caracteres y maximo 20"}
          value = {password.value}
          onChange={ (input) => {
            const password = input.target.value;
            setPassword({value: password, valid:validarPassword(password)})
          }}
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>;
  
}

export default DatosUsuario;
