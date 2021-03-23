import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { GLOBAL } from 'src/app/services/global';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public url_image:string;
  public posts=[];
  public id_post:number;
  public date_post: string;
  public image_view: string; 
  public titulo:string="";
  public contenido:string="";
  public isPostSingle:boolean=false;
  public autor:string;
  constructor(
    private _route: ActivatedRoute,
    private _router : Router,
    private _userService: UserService,
    private _postService: PostService
  ) {
    this.url_image = GLOBAL.url_image;
   }

  ngOnInit(): void {
    this.getPosts();

  }
  getPosts(){
    
    this._postService.getPostsAll().subscribe(
      response => {
        this.posts = response.posts;
      },
      error => {
        console.log(error);
      }
    );
  }
  viewPostById(id:any){
    
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
        this.autor = response.post[0].autor;
      },
      error => {
        console.log(error);
      }
    );
    this.isPostSingle = true;
  }
  viewAll(){
    this.isPostSingle = false;
  }

}
