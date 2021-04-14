export class ComponentModel {
  component: string;
  open?: boolean;
  height?: Height;
  width?: Width;

  constructor(component: string, open?: boolean, height?: Height, width?: Width) {
    this.component = component;
    this.open = open;
    this.height = height;
    this.width = width;
  }
}

export enum Height {
  h100 = '100%',
  h75 = '75%',
  h50 = '50%',
  h25 = '25%'
}

export enum Width  {
  w100 = 'w-100',
  w75 = 'w-75',
  w50 = 'w-50',
  w25 = 'w-25'
}
