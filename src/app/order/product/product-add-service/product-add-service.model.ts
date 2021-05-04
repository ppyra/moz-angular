import { CellLabelValue } from "../product-item/product-item.model";

export interface ProductOrderService {
    title: string;
    showWarrantyBtn: boolean;
    serviceBtn: ServiceButton;
    showIgnoreBtn: boolean;
    cellLabelValue: Array<CellLabelValue>;
}

export interface ServiceButton {
  show: boolean;
  position: string;
}
