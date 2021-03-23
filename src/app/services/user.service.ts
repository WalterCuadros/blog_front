import{ Injectable} from'@angular/core';
import{ HttpClient,HttpHeaders} from '@angular/common/http';//Permite hacer peticiones  Ajax y usar cabeceras 
import { Observable } from 'rxjs'; //Sirve para poder recoger la respuesta del servicio del backend
import {GLOBAL} from './global';
import { User } from '../models/user';

//Se le indica que es una clase injectable
@Injectable({
    providedIn: 'root'
})//De esta forma hago la clase injectable
export class UserService{
    
    public url:string;
    public identity;
    public token;
    constructor(
        public _http: HttpClient//Se carga el servicio para poder hacer las peticiones al backend
    ){
        this.url = GLOBAL.url;
    }
     //Metodo para registrar usuario, pide como parametro un objeto user
    register(user): Observable<any>{
        //Transforma el objeto user en json string
        let json = JSON.stringify(user);
        let params = json;
    
         let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded',);
        /* let headers = new HttpHeaders().set('Accept', 'application/json');
         headers.set('Content-Type', 'application/json; charset=utf-8'); */
        

       
        return this._http.post(this.url+'registerUser',params,{headers:headers});
    
      }
      signup(user,gettoken = null):  Observable<any>{
        //Transforma el objeto user en json string
        let json = JSON.stringify(user);
        let params = json;
    
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'user',params,{headers:headers});
    }
    getIdentity()
    {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != "undefined")
        {
            this.identity = identity
        }else{
            this.identity = null;
        }
        return this.identity;
    }
   
}
