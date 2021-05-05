import { CellLabelValue } from "../product-item/product-item.model";

export interface ProductOrderService {
    title: DescriptionCol;
    warrantyBtn: ServiceButton;
    serviceBtn: ServiceButton;
    discountBtn?: ServiceButton;
    showIgnoreBtn: boolean;
    cellLabelValue: Array<CellLabelValue>;
}
export interface DescriptionCol {
  text: string;
  colSize?: string;
}
export interface ServiceButton {
  show: boolean;
  position?: string;
  class?: string;
}
