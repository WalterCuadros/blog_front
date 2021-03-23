import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { GLOBAL } from 'src/app/services/global';


@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})
export class ContacComponent implements OnInit {
  public nombres:string;
  public email:string;
  public comentario:string;
  public isValid:boolean=true;
  constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _contactService: ContactService,

  ) { }

  ngOnInit(): void {
  }
  
  registerContact(){
    if(this.nombres != "" && this.email != "" && this.comentario != ""){

      let request={
        nombres:this.nombres,
        email:this.email,
        comentario:this.comentario
      }
      this._contactService.register(request).subscribe(
        response => {
  
        });
        this.clear_input();
    }else{
      this.isValid = false;
    }
    
  }
  clear_input(){
    this.isValid = true;
    this.nombres ="";
    this.email="";
    this.comentario="";
  }
}
