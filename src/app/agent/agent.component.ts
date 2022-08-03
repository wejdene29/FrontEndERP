import { UtilisateurService } from 'src/app/back/utilisateur.service';
import { Evenement } from './../back/Evenement';
import { Convention } from './../back/Convention';
import { Utilisateur } from './../back/Utilisateur copy';
import { TokenStorageService } from './../authentication/token-storage.service';
import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';

import {  Component,  OnInit } from '@angular/core';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, NgForm, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  lob:boolean=false;
  soldy:number=0;
  text1Class = "inactive";
  currentMenuId = "menu1";
  nom:string='';
  closeResult : string ='';
  count = 0;
  users=0;
  page :number=0;
  utilis :Utilisateur[]=[];
  convention :Convention[]=[];
  pageU=0;
  pagec=0;
  pagecredit =0 ;
  totalRecordsU: number;
  user :any=[];
  event : Evenement[] = [];


 Utilisateur = new Utilisateur();
 UserId = new Utilisateur();
  User = new Utilisateur();
  userU : Utilisateur[]=[];

  currentUser = new Utilisateur();
  client : Utilisateur[]=[];
  clients=0;

  isShown: boolean = false ; 
  formCompte!:FormGroup ;

  formAdh !:FormGroup ;




  constructor(private userS :UtilisateurService,
     private modalService: NgbModal,
    http : HttpClient , private fb : FormBuilder , private tokenStorage : TokenStorageService){ 
      this.currentUser=  this.tokenStorage.getUser().user;

    this.convention=[];
    this.utilis=[];
    this.totalRecordsU=0;
    


    this.event=[];

 
   
    
    let formControl = {
nom : new FormControl('',[Validators.required]),
prenom : new FormControl('',[Validators.required]),
email : new FormControl('',[Validators.required]),
cin :new FormControl('',[Validators.required]),
    }
    this.formAdh = this.fb.group(formControl)
 
   }

   get Nom(){
    return this.formAdh.get('nom');
  }
  get prenom(){
    return this.formAdh.get('prenom');
  }
  get email(){
    return this.formAdh.get('email');
  }
  get cin(){
    return this.formAdh.get('cin');
  }
  

/*
  creerP(){
    if(this.formCompte.valid){

    this.prof.registerCompte(this.compteProf).subscribe(
      (res)=>{
        console.log(this.compteProf)
        console.log("inscription réussite")
      },
      error => console.log("error")
      
    )
   
 }else {
    alert('form invalid !');
    //this.formCompte.reset();
    //console.log('invalide');
  console.log(this.formCompte.value);
  }}*/

  ngOnInit(): void {
  // this.getUser();
 //  this.getCredit();

 //   this.getDcomptes();
    
  }

  // hide sidebar button
  hideside(){
    switch(this.lob){
      case (false):
        this.lob= true;
       
        this.text1Class = "activeside";
        
        break;
        case (true):
        this.lob= false;
        this.text1Class = "inactive";
        break;
        default:
          this.lob=false;
          break;
    }
  }
/*
  creerM(){
    if(this.formCompte.valid){
  
     this.mor.registerCompte(this.compteMorale).subscribe(
       (res)=>{
        alert("félicitaion !");
         console.log("inscription réussite")
         this.formCompte.reset();
       },
       error => console.log("error")
     )
      console.log(this.compteMorale)
  } 
  else{
    alert('Form invalid !')
  this.formCompte.reset();
  console.log('invalide');
  
   
  }}
*/
  toggleShow( id :string) {
    if(id==='envoie'){
  this.isShown = ! this.isShown;}
  
  else if (id ==='oui'){
    this.isShown = ! this.isShown;
  }
  else if (id==='non'){
    this.isShown;
  }
  }
  
  
  
  
  isShowDiv = false;

     
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  public searchRecruteursC(key1: string):void {

    const results1: Utilisateur[] = [];
    for (const recruteur of this.utilis){
      if(recruteur.nom.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1 
   
      ){
        results1.push(recruteur);
      }
    }
    
   /* this.utilis = results1;
    if(results1.length === 0 || !key1){
      this.getUser();
      
    }
  */}
/*
  getUser(): void {
    this.userS.getUsers().subscribe(
      response => {
        const { content, totalElements  } = response;
        this.utilis = response.content;
        this.users = totalElements;
        console.log(response);
      },
      error => {
        console.log(error);
      });

  }





*/

/*
//supprimer utilisateur
  supp(c:Utilisateur){
    this.userS.deleteUser(c.id)
    .subscribe(
      (resp) =>{
        console.log(resp);
        alert("client supprimé");
        this.getUser();
      },
      error=>console.log(error)
    );   }
  
  
  // get user détails 
  
  AvoirId(i: Utilisateur): void{
    this.userS.getUserId(i.id).subscribe(
      (resp) =>{
      console.log(resp);
      this.userU=[];
     this.userU.push(resp);
    
      console.log(this.userU);
      
    },
    error=>console.log(error)
  );   }
  
// comptebancaires
suppC(c:CompteBoncaire){
  this.bonc.deleteCompte(c.idCb)
  .subscribe(
    (resp) =>{
      console.log(resp);
      this.getDcomptes();
    },
    error=>console.log(error)
  );   }


// get compte détails 

AvoirIdC(c: CompteBoncaire): void{
  this.bonc.getCompteId(c.idCb).subscribe(
    (resp) =>{
    console.log(resp);
    this.compteD=[];
   this.compteD.push(resp);
  
    console.log(this.userU);
    
  },
  error=>console.log(error)
);   }

// pagination pour yser
  handlePageChangeC(event: number): void {
    this.pagec= event;
    this.getUser();
  }


// pagination pour comptes
handlePageChange(event: number): void {
  this.pageU= event;
  this.getDcomptes();
}



// pagination pour credit
handlePageChangeCredit(event: number): void {
  this.pagecredit= event;
  this.getCredit();
}

//get function mta3 credit
        getCredit(): void {
          this.crd.getCredits()
            .subscribe(
              response => {
                const { content, totalElements  } = response;
                this.convention = response.content;
                this.count = totalElements;
                console.log(response);
              },
              error => {
                console.log(error);
              });}

// valider credit

ValiderCredit(c: Credit){
  this.crd.ValideCredit(c) .subscribe(
    response => {
      console.log(response);
      alert("credit avec id"+c.etatCredit+" est comfirmé ")
      this.getCredit();
    },
    error => {
      console.log(error);
    });}

// ne pas valider un credit 
InValiderCredit(c: Credit){
  this.crd.InValideCredit(c).subscribe(
    response => {
      console.log(response);
      alert("credit avec id"+c.etatCredit+" est non comfirmé ")
    },
    error => {
      console.log(error);
    });}


//Valide commpteBancaire
ValiderCompte(c: CompteBoncaire){
  this.bonc.ValideCompte(c) .subscribe(
    response => {
      console.log(response);
      alert("credit avec id"+c.idCb+" est comfirmé ")
    },
    error => {
      console.log(error);
    });}



//deatails demande ouverture compte
AvoirIdCc(c: CompteBoncaire): void{
  this.bonc.getCompteId(c.idCb).subscribe(
    (resp) =>{
    console.log(resp);
    this.compteDC=[];
   this.compteDC.push(resp);
  
    console.log(this.userU);
    
  },
  error=>console.log(error)
);   }

            
//comptes
  getDcomptes(): void {
    this.bonc.getComptes().subscribe(
    response => {
      const { content, totalElements  } = response;
      this.event = response.content;
      this.count = totalElements;
      console.log(response);
    },
    error => {
      console.log(error);
    });

  }

  getcomptes(): void {
    this.bonc.getAllComptes().subscribe(
    response => {
      const { content, totalElements  } = response;
      this.comptess = response.content;
      this.count = totalElements;
      console.log(response);
    },
    error => {
      console.log(error);
    });

  }




   openDetails(user :Utilisateur) : void {

    this.userS.getUserById(this.User.id).subscribe(
     data => {
      
              console.log(data);
             this.UserId=data;
           },
             error => {
            console.log(error);
     });
   }





        public searchRecruteurs(key: string):void {

          const results1: CompteBoncaire[] = [];
       /*   for (const recruteur of this.event){
            if(recruteur.idevent.toLowerCase().indexOf(key.toLocaleLowerCase()) !== -1 
         
            ){
              results1.push(recruteur);
            }
          }
          
          this.compte = results1;
          if(results1.length === 0 || !key){
            this.getDcomptes();
            
          }
        *//*}
          public searchRecruteursC(key1: string):void {

            const results1: Utilisateur[] = [];
            for (const recruteur of this.utilis){
              if(recruteur.nom.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1 
           
              ){
                results1.push(recruteur);
              }
            }
            
            this.utilis = results1;
            if(results1.length === 0 || !key1){
              this.getUser();
              
            }}
         ///////////////////////////////

    //         open(content : string) {
    //           this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //             this.closeResult = `Closed with: ${result}`;
    //           }, (reason) => {
    //             this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //           });
    //         }

    //         private getDismissReason(reason: any): string {
    //           if (reason === ModalDismissReasons.ESC) {
    //             return 'by pressing ESC';
    //           } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //             return 'by clicking on a backdrop';
    //           } else {
    //             return `with: ${reason}`;
    //           }
    //         }
            
    //         openDetails(targetModal: any, utilis: utilisateur) {
    //           this.modalService.open(targetModal, {
    //            centered: true,
    //            backdrop: 'static',
    //            size: 'small'
    //          });
             
    //         // document.getElementById('nom').setAttribute('value', utilis.Nom);
    //         //   document.getElementById('prenomE').setAttribute('value', utilis.prenom);
    //         //   document.getElementById('emailE').setAttribute('value', utilis.email);
    //         //   document.getElementById('profession').setAttribute('value', utilis.profession);
    //         //   document.getElementById('situation').setAttribute('value', utilis.situation);
              
    //         //   document.getElementById('gouvernorat').setAttribute('value', utilis.gouvernorat);
             
    //         this.element = document.getElementById('nom') as HTMLElement;
    // this.element.set

    //         }
         */
}
