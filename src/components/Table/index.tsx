import React from 'react';
import {
    table,
    tHeader,
    tData,
    tBody,
    filterIcon,
    tableWrapper,
    header,
    disableFilterIcon,
    disable,
} from './styles';
import { shoppingTableHeaderValues, tableTitle } from '../../common/constants';
import { Box, Grid, Typography } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/core/styles';
import { IData } from '../../common/interfaces';

const useStyles = makeStyles({
    filterIcon: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        width: '100%',
        height: '6vh',
        padding: '0px 0px',
    },
});

interface IProps {
  onCellClickHandler: (
    // eslint-disable-next-line no-unused-vars
    e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
  ) => void;
  isCellClicked: boolean;
  paginatedData: IData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onTableColumnFilterHandler: (e: any) => void;
  isGlobalFilterOn: boolean;
}

const Table: React.FC<IProps> = ({
    isCellClicked,
    paginatedData,
    onCellClickHandler,
    onTableColumnFilterHandler,
    isGlobalFilterOn,
}) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box style={tableWrapper}>
                <Typography variant="h6" style={header}>
                    {tableTitle}
                </Typography>
                <table style={table}>
                    <thead>
                        <tr>
                            {shoppingTableHeaderValues.map((data, idx) => (
                                <th key={idx} style={tHeader}>
                                    {isGlobalFilterOn ? (
                                        <Grid container className={classes.filterIcon}>
                                            {data.title}
                                            <FilterListIcon
                                                style={idx === 0 ? disableFilterIcon : filterIcon}
                                                data-selectedtablefilter={idx}
                                                onClick={onTableColumnFilterHandler}
                                            />
                                        </Grid>
                                    ) : (
                                        <Grid container id={`tableHeader-${data.title}`}>
                                            {data.title}
                                        </Grid>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody style={tBody}>
                        {paginatedData.map((d, idx) => (
                            <tr key={idx}>
                                <td
                                    data-selectedcolumn={'orderId'}
                                    data-selectedcell={d.orderId}
                                    data-selectedcolindex={idx}
                                    onClick={onCellClickHandler}
                                    style={isCellClicked ? disable : tData}>
                                    {d.orderId}
                                </td>
                                <td
                                    data-selectedcolumn={'onlineVendor'}
                                    data-selectedcell={d.onlineVendor}
                                    data-selectedcolindex={idx}
                                    id={`tData-${d.onlineVendor}-${idx}`}
                                    onClick={onCellClickHandler}
                                    style={isCellClicked ? disable : tData}>
                                    {d.onlineVendor}
                                </td>
                                <td
                                    data-selectedcolumn={'product'}
                                    data-selectedcell={d.product}
                                    data-selectedcolindex={idx}
                                    onClick={onCellClickHandler}
                                    style={isCellClicked ? disable : tData}>
                                    {d.product}
                                </td>
                                <td
                                    id={`tData-${d.category}${idx}`}
                                    data-selectedcolumn={'category'}
                                    data-selectedcell={d.category}
                                    data-selectedcolindex={idx}
                                    onClick={onCellClickHandler}
                                    style={isCellClicked ? disable : tData}>
                                    {d.category}
                                </td>
                                <td
                                    data-selectedcolumn={'deliveryStatus'}
                                    data-selectedcell={d.deliveryStatus}
                                    onClick={onCellClickHandler}
                                    data-selectedcolindex={idx}
                                    style={isCellClicked ? disable : tData}>
                                    {d.deliveryStatus}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box>
        </React.Fragment>
    );
};

export default Table;
