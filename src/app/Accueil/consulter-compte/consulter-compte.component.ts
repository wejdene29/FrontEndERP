import { TokenStorageService } from './../../authentication/token-storage.service';
import { AuthService } from './../../authentication/auth.service';
;
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { utilisateur } from 'src/app/back/utilisateur';
import { UtilisateurService } from 'src/app/back/utilisateur.service';

@Component({
  selector: 'app-consulter-compte',
  templateUrl: './consulter-compte.component.html',
  styleUrls: ['./consulter-compte.component.css']
})
export class ConsulterCompteComponent implements OnInit {
  
  
  user = new utilisateur();
  msg="";
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string;
 idd : number=0;
  constructor(private us :UtilisateurService , private route:Router,private authService: AuthService, private tokenStorage: TokenStorageService) {
    this.roles='';
   }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  loginUser(){
    
    this.us.loginUser(this.user).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/Acceuil']);
      },
      error => {
        console.log("error");
        this.msg="Username ou mot de passe incorrect"
      });
  }


 

  onSubmit(): void {
    const { userName, password} = this.user;

    this.authService.login(userName, password ).subscribe(
      data => {
       this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().role;
this.idd=this.tokenStorage.getUser().id;
console.log( this.roles );
console.log(this.tokenStorage.getUser().user);

       if(this.roles === 'client'){
         this.route.navigate(['/Acceuil']);}
        else  if(this.roles === 'agent'){
          this.route.navigate(['/agent']);} 
          else  this.route.navigate(['/admin']);
        
      },
      err => {
        this.errorMessage = "mot de passe ou nom d'utilisateur est incorrect";
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }



  
}
  


