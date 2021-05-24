import React, { useState, useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import { mainWrapper, tableAndPaginateWrapper } from './styles';
import Header from '../Header';
import Footer from '../Footer';
import Table from '../Table';
import Paginate from '../Paginate';
import FilterBox from '../FilterBox';
import BreadCrumbs from '../BreadCrumbs';

import {
    IFilterBoxData,
    IData,
    IFilterColumns,
    ISelectColumn,
    IExtendedData,
    IObjectKeys,
} from '../../common/interfaces';
import {
    updateFilterBoxData,
    filterShoppingData,
    updateShoppingDataAfterSelectFilter,
    calculateRowsPerPage,
    findUpatedFilterBoxHeaderValues,
} from '../../common/utils';
import {
    shoppingTableData,
    filterBoxColumnValues,
    shoppingTableHeaderValues,
    maxPage,
    rowsPerPage,
} from '../../common/constants';

export const Home: React.FC = () => {
    const [
        selectedColumnFilter,
        setSelectedColumnFilter,
    ] = useState<ISelectColumn>({
        colName: '',
        colIndex: -1,
    });
    const [isCellClicked, setIsCellClicked] = useState<boolean>(false);
    const [cellClicked, setCellClicked] = useState<string>('');

    const [isGlobalFilterOn, setIsGlobalFilterOn] = useState<boolean>(false);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [maxPages, setMaxPages] = useState<number>(maxPage);
    const [paginatedData, setPaginatedData] = useState<IData[]>(() =>
        calculateRowsPerPage(shoppingTableData, pageIndex - 1)
    );
    const [originalData, setOriginalData] = useState<IExtendedData[]>(
        shoppingTableData
    );

    const [copyOfData, setCopyOfData] = useState<IExtendedData[]>(
        shoppingTableData
    );
    const [prevStateData, setPrevStateData] = useState<IData[]>(
        shoppingTableData
    );
    const [select, setSelect] = useState<IObjectKeys>({});
    const [prevselect, setPrevSelect] = useState<IObjectKeys>({});
    const [filterBoxData, setFilterBoxData] = useState<IFilterBoxData[]>([]);
    const [prevFilterBoxData, setPrevFilterBoxData] = useState<IFilterBoxData[]>(
        []
    );
    const [filterBoxHeaderData, setFilterBoxHeaderData] = useState<
    IFilterColumns[]
  >(filterBoxColumnValues);
    const [prevFilterBoxHeaderData, setPrevFilterBoxHeaderData] = useState<
    IFilterColumns[]
  >([]);

    const { colName } = selectedColumnFilter;

    useEffect(() => {
        if (isGlobalFilterOn && !Object.values(select).includes(cellClicked)) {
            setFilterBoxHeaderData([...prevFilterBoxHeaderData]);
            setFilterBoxData([...prevFilterBoxData]);
            setSelect(prevselect);
            setIsCellClicked(true);
            setOriginalData([...shoppingTableData]);
            setMaxPages(Math.ceil(prevStateData.length / rowsPerPage));
            setPaginatedData([...calculateRowsPerPage(prevStateData, 0)]);
        } else if (!isGlobalFilterOn) {
            setIsCellClicked(false);
            setFilterBoxData([]);
            setSelect({});
            setPaginatedData([
                ...calculateRowsPerPage(shoppingTableData, pageIndex - 1),
            ]);
            setCopyOfData([...shoppingTableData]);
            setPageIndex(1);
            setMaxPages(maxPage);
        }
    }, [isGlobalFilterOn]);

    useEffect(() => {
        if (isCellClicked) {
            setOriginalData([...shoppingTableData]);
            setFilterBoxData([]);
            if (colName && colName.length > 0) {
                const sortedDistinctValues = updateFilterBoxData(
                    colName,
                    shoppingTableData
                );
                const updatedFilterBoxHeaderData = findUpatedFilterBoxHeaderValues(
                    filterBoxHeaderData,
                    colName
                );
                setFilterBoxHeaderData([...updatedFilterBoxHeaderData]);
                setFilterBoxData([...sortedDistinctValues]);
            }
            setMaxPages(Math.ceil(shoppingTableData.length / rowsPerPage));
            setPaginatedData([...calculateRowsPerPage(shoppingTableData, 0)]);
            setCopyOfData([...shoppingTableData]);
            setIsGlobalFilterOn(true);
        }
    }, [isCellClicked]);

    // useEffect(()=>{
    //     if (Object.values(select).length > 1 && isGlobalFilterOn) {
    //         // eslint-disable-next-line no-console
    //         console.log('paginatedData', Math.ceil(paginatedData.length / rowsPerPage),':',paginatedData.length);
    //         setPageIndex(Math.ceil(paginatedData.length / rowsPerPage));
    //     }
    // }, [paginatedData]);

    useEffect(() => {
        if (filterBoxData.length > 0) {
            setPrevFilterBoxData([...filterBoxData]);
            setPrevFilterBoxHeaderData([...filterBoxHeaderData]);
        }
    }, [filterBoxData]);

    useEffect(() => {
        if (colName && colName.length > 0) {
            setPageIndex(1);
            const sortedDistinctValues = updateFilterBoxData(colName, originalData);
            const updatedFilterBoxHeaderData = findUpatedFilterBoxHeaderValues(
                filterBoxHeaderData,
                colName
            );
            setFilterBoxHeaderData([...updatedFilterBoxHeaderData]);
            setFilterBoxData([...sortedDistinctValues]);
        }
    }, [selectedColumnFilter]);

    useEffect(() => {
        if (Object.keys(select).length > 0) {
            const filteredData = updateShoppingDataAfterSelectFilter(
                Object.values(select),
                originalData
            );
            if (filteredData.length > 0) {
                setMaxPages(Math.ceil(filteredData.length / rowsPerPage));
                setCopyOfData([...filteredData]);
                setPaginatedData([...calculateRowsPerPage(filteredData, 0)]);
                setPrevStateData([...filteredData]);
            } else {
                setMaxPages(Math.ceil(shoppingTableData.length / rowsPerPage));
                setPaginatedData([]);
                setPrevStateData([]);
                setPageIndex(0);
                setMaxPages(0);
            }
        }
    }, [select]);

    const onCellClickHandler = (
        e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
    ) => {
        if (!isCellClicked) {
            const selectedColumnFilter = e.currentTarget.getAttribute(
                'data-selectedcolumn'
            );
            const selectedCell = e.currentTarget.getAttribute('data-selectedcell');
            selectedCell && setCellClicked(selectedCell);
            const filteredData = filterShoppingData(
                selectedColumnFilter,
                shoppingTableData,
                selectedCell
            );
            if (selectedColumnFilter && selectedCell) {
                setSelect({ [selectedColumnFilter]: selectedCell });
                setPrevSelect({ [selectedColumnFilter]: selectedCell });
            }
            setSelectedColumnFilter({
                colName: selectedColumnFilter,
                colIndex: 1,
            });
            if (filteredData && filteredData.length > 0) {
                setPrevStateData([...filteredData]);
                setOriginalData([...filteredData]);
                setMaxPages(Math.ceil(filteredData.length / rowsPerPage));
                setPaginatedData([...calculateRowsPerPage(filteredData, 0)]);
            }
        }
        setIsCellClicked(true);
    };

    const onResetGlobalFilterHandler: () => void = () =>
        setIsGlobalFilterOn(!isGlobalFilterOn);

    const onSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedCheckbox = event.target.name;
        const obj: IObjectKeys = {};
        if (!Object.values(select).includes(selectedCheckbox)) {
            for (const data of originalData) {
                for (const key in data) {
                    if (data[key] === selectedCheckbox) {
                        obj[key] = selectedCheckbox;
                        break;
                    }
                }
            }
            const key = Object.keys(obj)[0];
            let currentFilterValue = '';
            let currentFilterKey = '';
            if (Object.keys(select).includes(key)) {
                let updatedFilterList: IObjectKeys = {};
                for (const keys in select) {
                    if (keys === key) {
                        currentFilterKey = key;
                        currentFilterValue = selectedCheckbox;
                    } else {
                        updatedFilterList[keys] = select[keys];
                    }
                }
                updatedFilterList = {
                    ...updatedFilterList,
                    [currentFilterKey]: currentFilterValue,
                };
                setSelect({ ...updatedFilterList });
                setPrevSelect({ ...updatedFilterList });
            } else {
                setSelect({ ...select, ...obj });
                setPrevSelect({ ...select, ...obj });
            }
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onTableColumnFilterHandler = (e: any) => {
        const selectedFilter = e.currentTarget.getAttribute(
            'data-selectedtablefilter'
        );
        const { field: selectedData } = shoppingTableHeaderValues[selectedFilter];
        setSelectedColumnFilter({
            colName: selectedData,
            colIndex: parseInt(selectedFilter),
        });
        setIsGlobalFilterOn(true);
    };

    const nextPageHandler: () => void = () => {
        if (pageIndex < maxPages) {
            setPaginatedData([...calculateRowsPerPage(copyOfData, pageIndex)]);
            setPageIndex(pageIndex + 1);
        }
    };

    const prevPageHandler: () => void = () => {
        if (pageIndex > 1) {
            setPaginatedData([...calculateRowsPerPage(copyOfData, pageIndex - 2)]);
            setPageIndex(pageIndex - 1);
        }
    };

    const lastPageHandler: () => void = () => {
        if (pageIndex <= maxPages) {
            setPaginatedData([...calculateRowsPerPage(copyOfData, maxPages - 1)]);
            setPageIndex(maxPages);
        }
    };

    const firstPageHandler: () => void = () => {
        if (pageIndex > 1) {
            setPaginatedData([...calculateRowsPerPage(copyOfData, 0)]);
            setPageIndex(1);
        }
    };
    return (
        <React.Fragment>
            <Header />
            <Box style={mainWrapper}>
                <Container style={tableAndPaginateWrapper}>
                    <BreadCrumbs select={select} />
                    <Table
                        isCellClicked={isCellClicked}
                        paginatedData={paginatedData}
                        onCellClickHandler={onCellClickHandler}
                        onTableColumnFilterHandler={onTableColumnFilterHandler}
                        isGlobalFilterOn={isGlobalFilterOn}
                    />
                    <Paginate
                        pageIndex={pageIndex}
                        nextPageHandler={nextPageHandler}
                        prevPageHandler={prevPageHandler}
                        lastPageHandler={lastPageHandler}
                        firstPageHandler={firstPageHandler}
                        maxPages={maxPages}
                    />
                </Container>
            </Box>
            <FilterBox
                filterBoxData={filterBoxData}
                filterBoxHeaderData={filterBoxHeaderData}
                isGlobalFilterOn={isGlobalFilterOn}
                onResetGlobalFilterHandler={onResetGlobalFilterHandler}
                onSelectHandler={onSelectHandler}
                select={select}
                selectedColumnFilter={selectedColumnFilter}
            />
            <Footer />
        </React.Fragment>
    );
};
