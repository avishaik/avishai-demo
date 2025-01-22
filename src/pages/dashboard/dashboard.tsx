import React, { FC, ReactElement } from 'react';

import { Grid2 } from '@mui/material';

//import { SideBar } from '../../components/sidebar/sidebar';
import { TasArea } from '../../components/taskArea/taskArea';

export const Dashboard: FC = (): ReactElement => {
  return (
    <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <TasArea />
   
    </Grid2>
  );
};
