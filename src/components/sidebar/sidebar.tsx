import React, { FC, ReactElement } from 'react';

import { Grid2 } from '@mui/material';
import { Profile } from '../profile/profile';
import { CreateTaskForm } from '../createaTaskForm/createTaskForm';

export const SideBar:FC = (): ReactElement => {
        return (
            <Grid2 size={{ 
                    xs: 6, 
                    md: 4 , 
                    }} 
                    sx={{
                    height: '100vh',
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    width: '100%',
                    backgroundColor: 'grey',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}>
                <Profile name='Guest!'/>
                <CreateTaskForm />
            </Grid2>
        );
};