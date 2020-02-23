import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {livre}from 'src/app/mode/livre';

@Injectable({
providedIn: 'root'
})
export class CatalogueService {

public host:string ="http://localhost:8081"
constructor(private httpClient:HttpClient) { }


  public getResource(url)
  {
return this.httpClient.get(this.host+url);
}

  public putResource(Livre:livre)
  {
return this.httpClient.put("http://localhost:8081/employ" ,Livre)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

}
