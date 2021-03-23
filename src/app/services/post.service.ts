import{ Injectable} from'@angular/core';
import{ HttpClient,HttpHeaders} from '@angular/common/http';//Permite hacer peticiones  Ajax y usar cabeceras 
import { Observable } from 'rxjs'; //Sirve para poder recoger la respuesta del servicio del backend
import {GLOBAL} from './global';
import { User } from '../models/user';

//Se le indica que es una clase injectable
@Injectable({
    providedIn: 'root'
})//De esta forma hago la clase injectable
export class PostService{
    
    public url:string;
    public identity;
    public token;
    constructor(
        public _http: HttpClient//Se carga el servicio para poder hacer las peticiones al backend
    ){
        this.url = GLOBAL.url;
    }
     
     public getPostsByUser(data: any): Observable<any> {
        let json = JSON.stringify(data);
        let params =  json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'viewPostbyUser', params, { headers: headers });
    
      }

      public createPost(data: any): Observable<any> {
        let json = JSON.stringify(data);
        let params =  json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'createPost', params, { headers: headers });
    
      }
      public editPost(data: any): Observable<any> {
        let json = JSON.stringify(data);
        let params =  json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'updatePost', params, { headers: headers });
    
      }
      public viewPostById(data: any): Observable<any> {
        let json = JSON.stringify(data);
        let params =  json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'viewPostbyId', params, { headers: headers });
    
      }
      public deletePostById(data: any): Observable<any> {
        let json = JSON.stringify(data);
        let params =  json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'deletePostbyId', params, { headers: headers });
    
      }
      public getPostsAll(): Observable<any> {
        let json = "";
        let params =  json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'viewAll', params, { headers: headers });
    
      }
   
   
}
