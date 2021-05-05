export interface ProductItemModel {
  imgDescCol: ImageDescriptionProduct;
  cellLabelValue: Array<CellLabelValue>;
  showDiscountButton: boolean;
  showDetailsButton: boolean;
}

export interface ImageDescriptionProduct {
  srcImg?: string;
  model: string;
  type: string;
  serialNo: string;
  colSize: string;
}
export interface CellLabelValue {
  value: string;
  label: string;
  colSize?: string;
  style?: string;
}
