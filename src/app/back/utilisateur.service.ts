
import { utilisateur } from 'src/app/back/utilisateur';
import { HttpClient } from '@angular/common/http';


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private app='http://localhost:8080/';
  constructor( private http :HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<any>(`${this.app}user/all`);
  }

  getAgents(): Observable<any>{
    return this.http.get<any>(`${this.app}user/allagent`);
  }



 updateUser(user:utilisateur):Observable<utilisateur>{
  return this.http.put<utilisateur>(`${this.app}user/update`,user);
}

public deleteUser(id:number):Observable<void>{
return this.http.delete<void>(`${this.app}user/delete/${id}`);
}

public loginUser(user:any):Observable<utilisateur>{
  return this.http.post<utilisateur>(`${this.app}/login`,user);
  
}


 public getUserId(id:number):Observable<utilisateur>{
   return this.http.get<utilisateur>(`${this.app}user/user/${id}`);
   }
  

  public getUserById(id: number): Observable<utilisateur>{
    return this.http.get<utilisateur>(`${this.app}user/user/${id}`);
    }

    /*
    recupererMotdePasee(email:email): Observable<email>{
      return this.http.post<email>(`${this.app}user/recupererMotdePasse`,email);
    }*/
    addAgent(user:utilisateur):Observable<utilisateur>{
      return this.http.post<utilisateur>(`${this.app}user/addAgent`,user);}
}
