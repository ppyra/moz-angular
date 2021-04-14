import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotifierComponent } from "./notifier.component";

@NgModule({
  imports: [CommonModule],
  declarations: [NotifierComponent],
  exports: [NotifierComponent]
})
export class NotifierModule { }
