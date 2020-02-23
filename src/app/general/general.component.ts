import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/new-product/authentification.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private authService:AuthentificationService,  private router:Router) { }

  ngOnInit() {
this.authService.loadUserAuthenticatedUserFromLocalStorage();
  }


onLogin(dataForm: any){
this.authService.login(dataForm.username, dataForm.password);
if (this.authService.isAuthenticated){
this.authService.saveAuthentifactedUser();
this.router.navigateByUrl('/livre')
}
}
}
