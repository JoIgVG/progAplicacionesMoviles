import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ApiProductosService } from 'src/app/service/api-productos.service';
=======
>>>>>>> 19a223438af2c8b9d0c46063db8da656804e096d

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  public titulo:String="Productos";
<<<<<<< HEAD
  items:any=[];

  constructor(private apiproductosService: ApiProductosService) { }

  ngOnInit(): void {
    this.apiproductosService.obtenerProductos().subscribe((Productos)=>{
      console.log('se traen los productos');
      this.items= Productos;
    })
  }
=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> 19a223438af2c8b9d0c46063db8da656804e096d
}
