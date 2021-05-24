import React from 'react';
import { wrapper, header } from './styles';
import { Box, Typography } from '@material-ui/core';
import { footerText } from '../../common/constants';

const Footer:React.FC = () => (
    <Box style={wrapper}>
        <Typography variant="subtitle1" style={header}>{footerText}
        </Typography>
    </Box>
);

export default Footer;