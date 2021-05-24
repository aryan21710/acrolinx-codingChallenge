import React from 'react';
import { mainWrapper, changePage, disable, paginateHeader } from './styles';
import { Box, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';

interface IProps {
  nextPageHandler: () => void;
  prevPageHandler: () => void;
  pageIndex: number;
  maxPages: number;
  lastPageHandler: () => void;
  firstPageHandler: () => void;
}

const Paginate: React.FC<IProps> = ({
    firstPageHandler,
    prevPageHandler,
    nextPageHandler,
    pageIndex,
    lastPageHandler,
    maxPages
}) => (
    <Box style={mainWrapper}>
        <Typography variant="h6" style={paginateHeader}>
      Page - {pageIndex} of {maxPages}
        </Typography>
        <FirstPageIcon
            id="firstPage"
            style={pageIndex === 1 ? disable : changePage}
            onClick={firstPageHandler}
        />
        <ArrowBackIosIcon
            id="prevPage"
            style={pageIndex === 1 ? disable : changePage}
            onClick={prevPageHandler}
        />
        <ArrowForwardIosIcon
            id="nextPage"
            style={pageIndex === maxPages ? disable : changePage}
            onClick={nextPageHandler}
        />
        <LastPageIcon
            id="lastPage"
            style={pageIndex === maxPages ? disable : changePage}
            onClick={lastPageHandler}
        />
    </Box>
);

export default Paginate;
