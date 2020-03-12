import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { GenCardComponent } from './gen-card/gen-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    GenCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
