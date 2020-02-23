import{Component, OnInit}from '@angular/core';
import {CatalogueService}from 'src/app/new-product/catalogue.service';
import {ActivatedRoute}from '@angular/router';
import {Router, NavigationEnd}from '@angular/router';
import {AuthentificationService }from 'src/app/new-product/authentification.service';
import {NgForm}from '@angular/forms';
import {FormsModule}from '@angular/forms';
import {livre}from 'src/app/mode/livre';


@Component({
selector: 'app-livres',
templateUrl: './livres.component.html',
styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
private product;
private categori;
private currentCategorie;
constructor(private catService:CatalogueService,
  private route:ActivatedRoute, private router:Router, public authService:AuthentificationService)
   {
  this.router.events.subscribe((val) =>{
  if (val instanceof NavigationEnd){
let url =val.url;

console.log(url);
  }
});
}

  ngOnInit() {
this.authService.loadUserAuthenticatedUserFromLocalStorage();
if(this.authService.isAuthenticated){

console.log("jjjjjjjjjjjjj");
let p1=this.route.snapshot.params.p1;
if(p1==1){
console.log( this.route.snapshot.params.p1)
  this.getProducts("/livres/search/selectedProduts");
 }
 else if (p1==2){
  let idcat=this.route.snapshot.params.p2;
  this.getProducts("/categories/"+idcat+"/livres");

}
this.getCategories();
}}




private getProducts(url){
this.catService.getResource(url).subscribe(data=>{
this.product=data;},err=>{console.log(err);})

}


public getProductsByCat(p){
this.currentCategorie=p;
this.router.navigateByUrl("/livre/2/"+p.id);
let p1=this.route.snapshot.params.p1;

if(p1==1){
console.log( this.route.snapshot.params.p1)
  this.getProducts("/livres/search/selectedProduts");
  }
  else if (p1==2){
  let idcat=this.route.snapshot.params.p2;
  this.getProducts("/categories/"+idcat+"/livres");}
}


private getCategories(){
this.catService.getResource("/categories").subscribe(data=>{
this.categori=data;},err=>{console.log(err);})
  }

onLogout(){
this.authService.removeTokenFromLocalStorage();
this.router.navigateByUrl('/');

}
isHidden: boolean = true;
click(){
    this.isHidden = !this.isHidden;
}
onSubmit(f:NgForm) {

    const pr1 = f.value['cat'];
    const pr2 = f.value['description'];
 const pr4 = f.value['promotion'];
    const pr5 = f.value['selected'];
    const pr6 = f.value['availabl'];

let liv= new livre();
liv.name=f.value['name'];
liv.description=f.value['description'];
liv.promotion=(f.value['promotion'] ==='true');
liv.selected=(f.value['selected'] ==='true');
liv. availabl=(f.value[' availabl']==='true');

       console.log(liv);
this.catService.putResource(liv);
}
}

