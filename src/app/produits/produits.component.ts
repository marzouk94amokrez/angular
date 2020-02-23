import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
produits;
  constructor(private httpClient:HttpClient) { }
  ngOnInit() {
  }

  onGetProducts() {
this.httpClient.get("http://localhost:8081/sabrina/")
  .subscribe(data=>{this.produits=data;},err=>{
    console.log(err);
  })
  }
}
