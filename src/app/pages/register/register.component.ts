import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public title: string;
  public user : User;
  public status: string;
  public msj: string;

  constructor(private _userService: UserService,private _route: ActivatedRoute,private _router : Router) {
    this.user = new User('','','','');
   }

  ngOnInit(): void {
  }
  onSubmit(form){
    //console.log(this.user);
    //console.log(this._userService.pruebas());
    this._userService.register(this.user).subscribe(
      response => {
        
        if(response.status == 'success'){
          this.status = response.status;
          //Vaciar el formulario
          this.user = new User('','','','');
          form.resetForm();
          this._router.navigate(['login']);
        }else{
          
        }
        
      },
      error => {
        console.log('error aqui');
          this.status = 'error';
          this.msj = error.error.message;
        console.log(<any>error);
      }
    );
  }
}
