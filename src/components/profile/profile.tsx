import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface IProfile {
    name?: string;
}

export const Profile: FC<IProfile> = (props): ReactElement => {
    const {name = 'guest1'} = props;
    return (
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        >
            <Avatar
            sx={{
                width: '96px',
                height: '96px',
                backgroundColor: 'magenta',
                marginBottom: '16px',
            }}>
                <Typography variant="h4" color="text.primary">
                {`${name.substring(0, 1)}`}
                </Typography>
                </Avatar>
                <Typography variant="h6" color="text.primary">
                    {`Hello ${name}`}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        This is your Task manager
                        </Typography>
        </Box>
    );
};

Profile.propTypes = {
    name: PropTypes.string
};