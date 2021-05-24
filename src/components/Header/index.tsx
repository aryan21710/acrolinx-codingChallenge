import React from 'react';
import { header, wrapper } from './styles';
import {  Box, Typography } from '@material-ui/core';
import { headerText } from '../../common/constants';

const Header:React.FC = () => (
    <Box style={wrapper}>
        <Typography variant="h6" style={header}>{headerText}</Typography>
    </Box>
);


export default Header;