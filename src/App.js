import SeccionPrincipal from "./components/SeccionPrincipal"
import { useState } from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const App = () => {
  const [value, setValue] = useState(2);
  const [colorDelBoton, setColorDelBoton] = useState('primary');

  const handleClick = () => {
    setColorDelBoton('error');
  };


  return (
    <div>

    <SeccionPrincipal />


      <Typography variant="h1" component="span">
        Hola Caro
      </Typography>

      <Rating value={1.6} />

      <div>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
      {/* boton que me traigo de material */}
      <Button
        variant="contained"
        onClick={handleClick}
        color={colorDelBoton}
        size="small"
        loading
      >
        Text
      </Button>
    </div>
  );
};

export default App;
