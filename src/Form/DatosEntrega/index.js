import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEntrega = ({updateStep}) => {
  const [address, setAddress] = useState({value:'', valid: true});
  const [city, setCity] = useState({value:'', valid: true});
  const [province, setProvince] = useState({value:'', valid: true});

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}

      onSubmit={(e) =>{
        e.preventDefault();
        updateStep(3);
        console.log("Algunas direcciones son: ", city, address, province);
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={address.value}
        onChange= { (input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setAddress({value, valid})
        }}
        error={address.valid == false} //Si password.valid == false se cumple se vuelve un true en caso de que haya un error
        helperText={address.valid == false && "Ingresa al menos dos caracteres"}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange= { (input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setCity({value, valid})
        }}
        error={city.valid == false} //Si password.valid == false se cumple se vuelve un true en caso de que haya un error
        helperText={city.valid == false && "Ingresa al menos dos caracteres"}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={province.value}
        onChange= { (input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setProvince({value, valid})
        }}
        error={province.valid == false} //Si password.valid == false se cumple se vuelve un true en caso de que haya un error
        helperText={province.valid == false && "Ingresa al menos dos caracteres"}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
