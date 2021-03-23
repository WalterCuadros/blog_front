import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-post-by-user',
  templateUrl: './post-by-user.component.html',
  styleUrls: ['./post-by-user.component.css']
})
export class PostByUserComponent implements OnInit {
  public identity;
  public posts=[];
  public isCreate:boolean=true;
  public titulo:string="";
  public contenido:string="";
  selectedFile: ImageSnippet;
  public image:string="";
  public isValid:boolean=true;
  public titleForm:string= "Crear";
  public id_post:number;
  public date_post: string;
  public image_view: string; 
  public url_image:string;
  public id_user;
  constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _userService: UserService,
    private _postService: PostService
  ) { 
    this.url_image = GLOBAL.url_image;
  }

  ngOnInit(): void {
    this.identity = this._userService.getIdentity();
    if(this.identity== null){
      this._router.navigate(['']);
    }
    console.log(this.identity.id);
    this.getPostIdUser();
    
    
  }
  
  logout(){
    this._route.params.subscribe(
      params=>{
        let logout = +params['sure'];
        if(logout == 1){
          localStorage.removeItem('identity');
          localStorage.removeItem('token');
          //redirección a otro componente
          this._router.navigate(['home']);
        }
      }
    )
  }
  getPostIdUser(){
    this._route.params.subscribe(
      params=>{
        this.id_user = +params['sure'];
      });
      this.getPosts();
  }
  getPosts(){
    let request = {
      id: this.id_user
    }
    console.log(this.id_user);
    this._postService.getPostsByUser(request).subscribe(
      response => {
        this.posts = response.posts;
        
      },
      error => {
        console.log(error);
      }
    );
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.image = this.selectedFile.src;
      console.log(this.selectedFile);
    });

    reader.readAsDataURL(file);
  }
  onSubmitCreate(){
    if(this.titulo != "" && this.contenido != "" && this.image != ""){

      let request = {
        title:this.titulo,
        content:this.contenido,
        image:this.image,
        autor:this.identity.nombres+' '+this.identity.apellidos,
        id_autor:this.identity.id
      }
      this._postService.createPost(request).subscribe(
        response => { 
        },
        error => {
          console.log(error);
        }
      );
      console.log(this.titulo);
      console.log(this.contenido);
      console.log(this.image);
      this.clearInput();
    }else{
      this.isValid = false;
    }
    this.getPosts();
  }
  onSubmitUpdate(){

    let request = {
      id:this.id_post,
      title:this.titulo,
      content:this.contenido,
      image:this.image
    }
    this._postService.editPost(request).subscribe(
      response => { 
        this.id_post = response.post[0].id;
        this.date_post = response.post[0].date_created;
        this.titulo = response.post[0].title;
        this.image_view = this.url_image+response.post[0].image;
        this.contenido = response.post[0].content;
      },
      error => {
        console.log(error);
      }
    );
    this.getPosts();
  }
  viewPostById(id:any){
    this.isCreate = false;
    this.titleForm = "Editar";
    let request={
      id: id
    }
    this._postService.viewPostById(request).subscribe(
      response => { 
        this.id_post = response.post[0].id;
        this.date_post = response.post[0].date_created;
        this.titulo = response.post[0].title;
        this.image_view = this.url_image+response.post[0].image;
        this.contenido = response.post[0].content;

      },
      error => {
        console.log(error);
      }
    );
  }
  deletePostById(id:any){
    let request ={
      id:id
    }
    this._postService.deletePostById(request).subscribe(
      response => { 
        this.getPostIdUser();
      },
      error => {
        console.log(error);
      }
    );
    this.titleForm = "Crear";
    this.clearInput();
      
  }
  createPost(){
    this.titleForm = "Crear";
    this.clearInput();
  }
  clearInput(){
    this.isValid = true;
    this.titulo ="";
    this.contenido="";
    this.image="";
    this.isCreate=true;
  }
}
