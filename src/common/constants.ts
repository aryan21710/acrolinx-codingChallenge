import { IExtendedData } from './interfaces';

export const rowsPerPage = 10;
export const homeUrl = 'http://localhost:3000/';
export const tableTitle = 'Shopping Inventory';
export const filterBox = 'Filter Box';

export const headerText = 'ACROLINX FRONTEND CODING CHALLENGE';
export const homePageText =
  'REACT HOOKS- TYPESCRIPT - MATERIAL UI - AGGRID - CYPRESS - WEBPACK - ESLINT ';
export const footerText =
  '@Acrolinx Copyrighted by Aryan Sharma 05/2021. All Rights Reserved.';
export const filterBoxColumnValues = [
    {
        title: 'COUNT',
        field: 'count',
        headerStyle: {
            backgroundColor: '#039be5'
        }
    },
    {
        title: 'DISTINCT-VALUES',
        field: 'distinctValue',
        headerStyle: {
            backgroundColor: '#039be5'
        }
    },
    {
        title: 'SELECT',
        field: 'select',
        headerStyle: {
            backgroundColor: '#039be5'
        }
    }
];

export const shoppingTableHeaderValues = [
    {
        title: 'Order-Id',
        field: 'orderId',
        headerStyle: {
            backgroundColor: '#039be5'
        }
    },
    {
        title: 'Online-Vendor',
        field: 'onlineVendor',
        headerStyle: {
            backgroundColor: '#039be5'
        }
    },
    {
        title: 'Product',
        field: 'product',
        headerStyle: {
            backgroundColor: '#039be5'
        }
    },
    {
        title: 'Category',
        field: 'category',
        headerStyle: {
            backgroundColor: '#039be5'
        }
    },
    {
        title: 'Delivery-Status',
        field: 'deliveryStatus',
        headerStyle: {
            backgroundColor: '#039be5'
        }
    }
];

export const shoppingTableData: IExtendedData[] = [
    {
        orderId: '597372',
        onlineVendor: 'Ajio',
        deliveryStatus: 'transit',
        product: 'Trousers',
        category: 'Garment'
    },
    {
        orderId: '427963',
        onlineVendor: 'Myntra',
        deliveryStatus: 'transit',
        product: 'Trousers',
        category: 'Garment'
    },
    {
        orderId: '711687',
        onlineVendor: 'Wallmart',
        deliveryStatus: 'delivered',
        product: 'Hat',
        category: 'Garment'
    },
    {
        orderId: '60080',
        onlineVendor: 'Amazon',
        deliveryStatus: 'transit',
        product: 'Hat',
        category: 'Garment'
    },
    {
        orderId: '871565',
        onlineVendor: 'Myntra',
        deliveryStatus: 'transit',
        product: 'Milk',
        category: 'Groceries'
    },
    {
        orderId: '171109',
        onlineVendor: 'Myntra',
        deliveryStatus: 'dispatched',
        product: 'Athleisure',
        category: 'Garment'
    },
    {
        orderId: '1004402',
        onlineVendor: 'Amazon',
        deliveryStatus: 'transit',
        product: 'Athleisure',
        category: 'Garment'
    },
    {
        orderId: '737042',
        onlineVendor: 'Wallmart',
        deliveryStatus: 'delivered',
        product: 'Hat',
        category: 'Garment'
    },
    {
        orderId: '538473',
        onlineVendor: 'Grofers',
        deliveryStatus: 'transit',
        product: 'Milk',
        category: 'Garment'
    },
    {
        orderId: '1004112',
        onlineVendor: 'Myntra',
        deliveryStatus: 'delivered',
        product: 'Athleisure',
        category: 'Garment'
    },
    {
        orderId: '483635',
        onlineVendor: 'Ajio',
        deliveryStatus: 'transit',
        product: 'Trousers',
        category: 'Garment'
    },
    {
        orderId: '980606',
        onlineVendor: 'Amazon',
        deliveryStatus: 'transit',
        product: 'Trousers',
        category: 'Garment'
    },
    {
        orderId: '336274',
        onlineVendor: 'Myntra',
        deliveryStatus: 'delivered',
        product: 'Bread',
        category: 'Groceries'
    },
    {
        orderId: '852165',
        onlineVendor: 'Myntra',
        deliveryStatus: 'transit',
        product: 'Milk',
        category: 'Groceries'
    },
    {
        orderId: '863734',
        onlineVendor: 'Grofers',
        deliveryStatus: 'dispatched',
        product: 'Bread',
        category: 'Groceries'
    },
    {
        orderId: '606593',
        onlineVendor: 'Myntra',
        deliveryStatus: 'dispatched',
        product: 'Trousers',
        category: 'Garment'
    },
    {
        orderId: '862595',
        onlineVendor: 'Grofers',
        deliveryStatus: 'dispatched',
        product: 'Athleisure',
        category: 'Garment'
    },
    {
        orderId: '527186',
        onlineVendor: 'Amazon',
        deliveryStatus: 'transit',
        product: 'Eggs',
        category: 'Groceries'
    },
    {
        orderId: '923606',
        onlineVendor: 'Amazon',
        deliveryStatus: 'transit',
        product: 'Hat',
        category: 'Garment'
    },
    {
        orderId: '454939',
        onlineVendor: 'Wallmart',
        deliveryStatus: 'delivered',
        product: 'Eggs',
        category: 'Groceries'
    },
    {
        orderId: '129955',
        onlineVendor: 'Ajio',
        deliveryStatus: 'delivered',
        product: 'Bread',
        category: 'Groceries'
    },
    {
        orderId: '919794',
        onlineVendor: 'Myntra',
        deliveryStatus: 'transit',
        product: 'Athleisure',
        category: 'Groceries'
    },

    {
        orderId: '829728',
        onlineVendor: 'Grofers',
        deliveryStatus: 'transit',
        product: 'Milk',
        category: 'Groceries'
    },
    {
        orderId: '860730',
        onlineVendor: 'Amazon',
        deliveryStatus: 'dispatched',
        product: 'Hat',
        category: 'Garment'
    },
    {
        orderId: '135479',
        onlineVendor: 'Wallmart',
        deliveryStatus: 'transit',
        product: 'TShirt',
        category: 'Garment'
    },
    {
        orderId: '599836',
        onlineVendor: 'Grofers',
        deliveryStatus: 'dispatched',
        product: 'Eggs',
        category: 'Groceries'
    },
    {
        orderId: '621841',
        onlineVendor: 'Ajio',
        deliveryStatus: 'dispatched',
        product: 'Hat',
        category: 'Garment'
    },

    {
        orderId: '699242',
        onlineVendor: 'Myntra',
        deliveryStatus: 'transit',
        product: 'Milk',
        category: 'Groceries'
    },
    {
        orderId: '312191',
        onlineVendor: 'Ajio',
        deliveryStatus: 'delivered',
        product: 'TShirt',
        category: 'Garment'
    },
    {
        orderId: '495809',
        onlineVendor: 'Wallmart',
        deliveryStatus: 'dispatched',
        product: 'Hat',
        category: 'Garment'
    }
];

export const maxPage = Math.ceil(shoppingTableData.length / rowsPerPage);
