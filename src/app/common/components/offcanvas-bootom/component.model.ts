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
