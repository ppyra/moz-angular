import { CellLabelValue } from "../product-item/product-item.model";

export class ProductOrderService {
    title: string;
    showWarrantyBtn: boolean;
    serviceBtn: ServiceButton;
    showIgnoreBtn: boolean;
    cellLabelValue: Array<CellLabelValue>;
    constructor() {}
}

export interface ServiceButton {
  show: boolean;
  position: string;
}
