import React from 'react';
import { Box } from '@material-ui/core';
import {
    wrapper,
    breadcrumb
} from './styles';
import { IObjectKeys } from '../../common/interfaces';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

interface IProps {
  select: IObjectKeys
}

const BreadCrumbs:React.FC<IProps> = ({ select }) => (
    <Box style={wrapper}>
        {Object.values(select).map((value, idx)=><React.Fragment
            key={idx}>{idx === 3 ? <span style={breadcrumb}>
                {value}
            </span> : <span style={breadcrumb}>
                {value}<ArrowRightAltIcon/>
            </span>}</React.Fragment>)}
    </Box>
);

export default BreadCrumbs;