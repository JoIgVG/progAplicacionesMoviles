import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';

import { ProductosPage } from './productos.page';
<<<<<<< HEAD
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiProductosService } from 'src/app/service/api-productos.service';
=======
>>>>>>> 19a223438af2c8b9d0c46063db8da656804e096d

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    ProductosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ProductosPage],
  providers:[ApiProductosService]
=======
    ProductosPageRoutingModule
  ],
  declarations: [ProductosPage]
>>>>>>> 19a223438af2c8b9d0c46063db8da656804e096d
})
export class ProductosPageModule {}
