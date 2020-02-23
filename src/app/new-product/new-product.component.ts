import {Component, OnInit} from '@angular/core';
import { CatalogueService } from 'src/app/new-product/catalogue.service';
import { Router } from '@angular/router'
@Component({
selector: 'app-new-product',
templateUrl: './new-product.component.html',
styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
private categori;
constructor(private catService: CatalogueService, private rtr: Router) { }

  ngOnInit(): void {
this.getCategories();
  }

private getCategories(){
this.catService.getResource("/categories").subscribe(data=>{
this.categori=data;},err=>{console.log(err);})

}
getProductsByCat(p){
this.rtr.navigateByUrl("/livre/2/"+p.id);
}
}
