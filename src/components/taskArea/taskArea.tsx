import { Grid2 } from '@mui/material';
import React, { FC, ReactElement } from 'react';


export const TasArea: FC = (): ReactElement => {
    return (
        <Grid2 size={{ xs: 6, md: 8 }} >
            <h2>Welcome to Avishai's website!</h2>
            <h2>We are still under construction, please be patient...</h2>

            <h3>
                For more details: 
                <a 
                    href={"https://facebook.com/avishai.klaiman"}>
                    <img src={require("../../images/vintage-icon-png-19160.png")} alt="facebook" />
                </a>
            </h3>
            <img src={require("../../images/Under-Construction-Transparent-Images.png")} alt="under constrcution" />
            

            
      </Grid2>
    );
}