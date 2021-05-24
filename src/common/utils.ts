import { rowsPerPage } from './constants';
import {
    IData,
    IFilterColumns,
    IExtendedData,
    IFilterBoxData
} from './interfaces';
import _ from 'lodash';

export const updateFilterBoxData = (
    selectedColumnFilter: string,
    data: IExtendedData[]
): IFilterBoxData[] => {
    let listOfDistinctValues: (string | number)[] = [];
    for (const i of data) {
        if (
            selectedColumnFilter !== 'distinctValue' &&
      !listOfDistinctValues.includes(i[selectedColumnFilter])
        ) {
            listOfDistinctValues = [...listOfDistinctValues, i[selectedColumnFilter]];
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedDistinctValues = listOfDistinctValues.map(
        (value: string | number) => ({
            distinctValue: value
        })
    );
    const sortedDistinctValues = _.sortBy(updatedDistinctValues, [
        function (o: { distinctValue: any }) {
            return o.distinctValue;
        }
    ]).map((_, idx) => ({ ..._, count: idx + 1 }));
    return sortedDistinctValues;
};

export const findUpatedFilterBoxHeaderValues = (
    filterBoxHeaderData: IFilterColumns[],
    selectedColumnFilter: string | null
): IFilterColumns[] =>
    filterBoxHeaderData.map((data: IFilterColumns) => {
        if (data.field === 'distinctValue') {
            return {
                title: selectedColumnFilter
                    ? `${selectedColumnFilter.toUpperCase()}`
                    : '',
                field: 'distinctValue',
                headerStyle: {
                    backgroundColor: '#039be5'
                }
            };
        } else {
            return { ...data };
        }
    });

export const updateShoppingDataAfterSelectFilter = (
    selectedData: (string | number)[],
    paginatedData: IExtendedData[]
): IExtendedData[] => {
    let updatedData: IExtendedData[] = [];
    for (let i = 0; i <= paginatedData.length - 1; i++) {
        let count = 0;
        for (const k of selectedData) {
            if (Object.values(paginatedData[i]).includes(k)) {
                count++;
            }
        }
        if (count === selectedData.length) {
            updatedData = [...updatedData, paginatedData[i]];
        }
    }

    return updatedData;
};

export const filterShoppingData = (
    selectedColumnFilter: string | null,
    paginatedData: IData[],
    selectedCell: string | null
): IData[] | undefined => {
    if (selectedColumnFilter) {
        return paginatedData.filter(
            (data: IExtendedData) => data[selectedColumnFilter] === selectedCell
        );
    }
};

export const calculateRowsPerPage = (
    original: IData[],
    pageIndex: number
): IData[] => {
    const copy = [...original];
    const maxPage = Math.ceil(copy.length / rowsPerPage);

    const result = new Array(maxPage)
        .fill('')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(_ => copy.splice(0, rowsPerPage));
    return result[pageIndex] ?? original;
};
