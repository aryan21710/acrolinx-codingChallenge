export  interface IFilterBoxData {
  count: number
  distinctValue: string;
}

export interface IDistinctValue {
  count: number
  distinctValue: string | number ;
}

export type IData = {
  orderId: string;
  onlineVendor: string;
  product: string;
  deliveryStatus: string;
  category: string;
};

export interface IFilterColumns {
  title: string;
  field: string;
  headerStyle: {
    backgroundColor: string;
  };
}

export interface ISelectColumn {
  colName: string|null,
  colIndex: number,
}

export interface IObjectKeys {
  [key: string]: string | number
}

export interface IExtendedData extends IObjectKeys {
  orderId: string
  onlineVendor: string
  product: string
  deliveryStatus: string
  category: string
}
