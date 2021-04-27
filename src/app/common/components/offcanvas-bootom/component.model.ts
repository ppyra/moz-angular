export class ComponentModel {
  primaryTitle: string;
  secondatyTitle: string;
  showDiscountButton: boolean;
  showDetailsButton: boolean;

  constructor(primaryTitle: string, secondatyTitle: string) {
    this.primaryTitle = primaryTitle;
    this.secondatyTitle = secondatyTitle;
  }
}

export enum OrderPart {
  ORDER = 'order',
  ORDER_DETAILS ='order_details',
  INSURANCE = 'insurance',
  CREATE_INVOICE = 'create_invoice'
}
