import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  public token;
  public identity;
  public status;
  public mensaje:string;
  constructor(private _userService: UserService,
    private _route: ActivatedRoute,private _router : Router) {
    this.title = 'Identificate';
    this.user = new User('','','','');
   }

   ngOnInit(){
    let user = this._userService.getIdentity();
     this.logout();
     console.log("cargo loginnnn");
   }
   onSubmit(form){
    this._userService.signup(this.user,true).subscribe(
      response =>{
        if(response.status == 'success'){
          this.identity = response.user;
          localStorage.setItem('identity',JSON.stringify(this.identity));
          this._router.navigate(['listPosts',this.identity.id]);
        }else{
          this.mensaje = response.message;
          this.status = response.status;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
   }
   logout(){
     this._route.params.subscribe(
       params=>{
         let logout = +params['sure'];
         if(logout == 1){
           localStorage.removeItem('identity');
           this.identity=null;
           this.token=null;
           //redirección a otro componente
           this._router.navigate(['']);
         }
       }
     )
   }
}
