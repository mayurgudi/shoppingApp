import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ProductComponent } from "./product/product.component";
import { ItemComponent } from "./item/item.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ProductComponent, ItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
