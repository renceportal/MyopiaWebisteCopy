import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/myopia.comment.service';
import { Comments } from '../model/comment';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.css']
})
export class HowToComponent implements OnInit {

  public commentArray : Comments[];
  public comment = new Comments();

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.fetchComment();
  }

  fetchComment(): void { 
    this.commentService 
      .getComments() 
      .subscribe( 
        commentArray => (this.commentArray = commentArray), 
        error => (this.commentArray = <any>error) ,
      ); 
  } 

  add(): void { 
    this.commentService.addComments(this.comment).subscribe( 
      () => { 
        this.comment.comment = null; 
        this.comment.name = null; 
        this.fetchComment(); 
      },
      error => (this.commentArray = <any>error) 
    );
  } 

}
