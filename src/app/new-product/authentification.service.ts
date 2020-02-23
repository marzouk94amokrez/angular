import { Injectable } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
private users=[
{usename:'admin',password:'1234',roles:['ADMIN','USER']},
{usename:'admin1',password:'1234',roles:['USER']},
{usename:'admin2',password:'1234',roles:['USER']},
];
public isAuthenticated:boolean;
public userAuthenticated;
public token;
  constructor() { }
public login(username:string,pasword:string){
let user;
this.users.forEach(u=>{
if (u.usename==username && u.password==pasword){
user=u;
this.token= btoa(JSON.stringify({username:u.usename, roles:u.roles}));
}
});
if(user){
this.isAuthenticated=true;
this.userAuthenticated=user;
}
else{
this.isAuthenticated=false;
this.userAuthenticated=undefined;}
}
public isAdmin(){
if(this.userAuthenticated){
if(this.userAuthenticated.roles.indexOf('ADMIN')>-1)
return true;
}
return false
}
public saveAuthentifactedUser(){
if(this.userAuthenticated){
localStorage.setItem('authToken', this.token );
}
}

public loadUserAuthenticatedUserFromLocalStorage(){
console.log('loadtoken');

let t= localStorage.getItem('authToken');
if (t){
let user=JSON.parse(atob(t));
this.userAuthenticated={username:user.usename, roles:user.roles};
this.isAuthenticated=true;
this.token=t;
console.log('loadtoken est fini');

}
}
public removeTokenFromLocalStorage(){
localStorage.removeItem("authToken");
this.isAuthenticated=false;
this.token = undefined;
this.userAuthenticated=undefined;

}
}
