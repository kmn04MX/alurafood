import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper"; //Guía visual que indica en que pasó estamos

const Form = () => {
  const [step, setStep] = useState(0); //Servirá para hacer el cambio del formulario
  //step = 0 --> <DatoaUsuario>
  //Step = 1 --> <DatosPersonales/>
  //step = 2 --> <DatosEntrega/>
  //Step = 3  --> <Complete/>

  //Forma 1
  const selectStep = () =>{
    switch (step){
      case 0:
        return <DatosUsuario />
        break;
      case 1: 
        return <DatosPersonales/>
        break;
      case 2:
        return <DatosEntrega/>
        break;
      default:
        return <Complete/>
        break;
    }
      
  }

  //Forma 2 no recomendable
  /* const steps = [<DatosUsuario />,<DatosPersonales/>,<DatosEntrega/>,<Complete/>] */


  const updateStep = (step) =>{
    console.log("Actualizar paso", step);
    setStep(step);
  }
  //Forma 3 
  const steps ={ 
                  0: <DatosUsuario  updateStep={updateStep}/>,
                  1: <DatosPersonales updateStep={updateStep}/>,
                  2: <DatosEntrega updateStep={updateStep}/>,
                  3: <Complete/>}

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step ={step}/>}
        {/*<DatosUsuario />
        <DatosPersonales />
        <DatosEntrega /> */}
        {/* {selectStep()} */}
        {steps[step]}
      </FormSpace>
    </Box>
  );
};

export default Form;
