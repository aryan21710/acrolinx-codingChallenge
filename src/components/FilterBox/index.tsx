import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { filterBox } from '../../common/constants';
import {
    IFilterBoxData,
    IFilterColumns,
    IObjectKeys,
    ISelectColumn,
} from '../../common/interfaces';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {
    wrapper,
    tableWrapper,
    tHeader,
    tData,
    tBody,
    table,
    header,
} from './styles';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';

interface IProps {
  filterBoxData: IFilterBoxData[];
  filterBoxHeaderData: IFilterColumns[];
  isGlobalFilterOn: boolean;
  onResetGlobalFilterHandler: () => void;
  // eslint-disable-next-line no-unused-vars
  onSelectHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  select: IObjectKeys;
  selectedColumnFilter: ISelectColumn;
}
const FilterBox: React.FC<IProps> = ({
    filterBoxData,
    filterBoxHeaderData,
    isGlobalFilterOn,
    onResetGlobalFilterHandler,
    onSelectHandler,
    select,
    selectedColumnFilter,
}) => (
    <Box style={wrapper}>
        <Box style={tableWrapper}>
            <Typography variant="h6" style={header}>
                {filterBox}
            </Typography>
            <table style={table}>
                <thead>
                    <tr style={tHeader}>
                        {filterBoxHeaderData.map((data: IFilterColumns, idx: number) => (
                            <th key={idx} id={`filterBoxHeader-${data.title}`}>
                                {data.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody style={tBody} id="filterBoxData">
                    {filterBoxData.map((d: IFilterBoxData, idx: number) => (
                        <tr key={idx}>
                            <td style={tData}> {d.count} </td>
                            <td id={`filterBoxData-${d.distinctValue}`} style={tData}>
                                {d.distinctValue}
                            </td>
                            <td style={tData}>
                                <Checkbox
                                    id={`checkbox-${d.distinctValue}`}
                                    name={d.distinctValue}
                                    checked={
                                        d.distinctValue ===
                    Object.values(select)[Object.values(select).length - 1]
                                            ? true
                                            : false
                                    }
                                    onChange={onSelectHandler}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <FormControlLabel
                control={
                    <Switch
                        id="toggleSwitch"
                        checked={isGlobalFilterOn}
                        disabled={
                            selectedColumnFilter.colName
                                ? selectedColumnFilter.colName.length === 0
                                : true
                        }
                        onChange={onResetGlobalFilterHandler}
                        name="filteron"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                }
                label="Toggle Filter"
            />
        </Box>
    </Box>
);

export default FilterBox;
