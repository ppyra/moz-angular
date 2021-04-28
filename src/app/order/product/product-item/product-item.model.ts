export class ProductItemModel {
  imgDescCol: ImageDescriptionProduct;
  cellLabelValue: Array<CellLabelValue>;
  //showPieces: boolean;
  showDiscountButton: boolean;
  showDetailsButton: boolean;

  constructor() { }
}

export class ImageDescriptionProduct {
  srcImg?: string;
  model: string;
  type: string;
  serialNo: string;
  colSize: string;
  constructor(model: string, type: string, serialNo: string, colSize: string, srcImg?: string) {
    this.model = model;
    this.type = type;
    this.serialNo = serialNo;
    this.colSize = colSize;
    this.srcImg = srcImg;
  }
}
export class CellLabelValue {
  value: string;
  label: string;
  colSize: string;
  constructor(value: string, label: string, colSize: string) {
    this.value = value;
    this.label = label;
    this.colSize = colSize;
  }
}
