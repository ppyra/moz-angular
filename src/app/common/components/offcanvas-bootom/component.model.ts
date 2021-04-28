// export class ComponentModel {
//   imgDescCol: ImageDescriptionProduct;
//   cellLabelValue: Array<CellLabelValue>;
//   //showPieces: boolean;
//   showDiscountButton: boolean;
//   showDetailsButton: boolean;

//   constructor() { }
// }

// export class ImageDescriptionProduct {
//   srcImg: string;
//   model: string;
//   type: string;
//   serialNo: string;
//   colSize: string;
// }
// export class CellLabelValue {
//   value: string;
//   label: string;
//   colSize: string;
//   constructor(value: string, label: string, colSize: string) {
//     this.value = value;
//     this.label = label;
//     this.colSize = colSize;
//   }
// }

export enum OrderPart {
  ORDER = 'order',
  ORDER_DETAILS ='order_details',
  INSURANCE = 'insurance',
  CREATE_INVOICE = 'create_invoice',
  INVOICE= 'invoice'
}

// case OrderPart.INSURANCE:
//         this.showDiscountButton = false;
//         this.showDetailsButton = false;
//         this.showPieces = true;
//         this.imgDescCol = 'col-6'
//         this.imgWidth = 100;
//         this.priceLabel = this.translate.instant('product.sum');
//         break;
//       case OrderPart.CREATE_INVOICE:
//         this.showDiscountButton = false;
//         this.showDetailsButton = false;
//         this.showPieces = false;
//         this.imgDescCol = 'col-4';
//         this.priceLabel = this.translate.instant('product.sum');
//         break;
//       case OrderPart.ORDER_DETAILS:
//         this.showDiscountButton = false;
//         this.showDetailsButton = false;
//         this.showPieces = true;
//         this.imgDescCol = 'col-7';
//         this.priceLabel = this.translate.instant('product.price');
//         break;
