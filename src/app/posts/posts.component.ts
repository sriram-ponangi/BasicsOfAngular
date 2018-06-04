import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AppError } from '../service-errors/app-errors';
import { NotFoundError } from '../service-errors/not-found-error';
import { BadInputError } from '../service-errors/bad-input-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostsService) {
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe(postResponse => this.posts = postResponse);
      /*}, //instaed of handling the error here the error propagates and finally hits the AppErrorHandler class
      (error: Response) => {
        alert('Unexpected error occured!');
        console.log(error);
      }*/
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    this.posts.splice(0, 0, post); // *********OPTIMISTIC APPROACH******ADDING THE INPUT BEFORE THE SERVICE CALL *********
    // input.value
    this.service.create(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        // this.posts.push() method only adds at the end and splice can add in the begining
        // this.posts.splice(0, 0, post); // *********PESIMISTIC APPROACH******ADDING THE INPUT AFTER THE SERVICE CALL *********
      }, (error: AppError) => {

        this.posts.splice(0, 1); // *********OPTIMISTIC APPROACH******ROLLBACK IF CALL TO THE SERVER FAILS

        if (error instanceof BadInputError) {
          alert('Bad Request');
          // this.form.setErrors(error.OriginalError);
        } else {
          /*alert('Unexpected error occured!');
          console.log(error);*/
          // here we need to throw the error so that the Global Error Handler takes incharge
          // else the error is assumed tobe handled.
          throw error;
        }
      });
  }

  updatePost(post) {
     this.service.update(post)
     .subscribe(response => {
       console.log(response);
     }/*, (error: Response) => {
      //instaed of handling the error here the error propagates and finally hits the AppErrorHandler class
      alert('Unexpected error occured!');
      console.log(error);
    }*/);
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    const index = this.posts.indexOf(post); // *********OPTIMISTIC APPROACH******ADDING THE INPUT BEFORE THE SERVICE CALL *********
    this.posts.splice(index, 1); // *********OPTIMISTIC APPROACH******ADDING THE INPUT BEFORE THE SERVICE CALL *********

     this.service.delete(post.id)// 3555)
     .subscribe(() => {
       // const index = this.posts.indexOf(post); // *********PESIMISTIC APPROACH******ADDING THE INPUT AFTER THE SERVICE CALL *********
       // this.posts.splice(index, 1); // *********PESIMISTIC APPROACH******ADDING THE INPUT AFTER THE SERVICE CALL *********
     }, (error: AppError) => {
      this.posts.splice(index, 0, post); // *********OPTIMISTIC APPROACH******ROLLBACK IF CALL TO THE SERVER FAILS

      if (error instanceof NotFoundError) {
        alert('This post has already been deleted.');
      } else {
          // alert('Unexpected error occured!');
          // console.log(error);
          // here we need to throw the error so that the Global Error Handler takes incharge
          // else the error is assumed tobe handled.
        throw error;
      }
    });
  }



  /*
     Learning about Observable and Promises
  */
  myDeletePosts(post) {
    this.service.myDelete(post.id); // Observables don't work without subscribe() but for promises this is enough
    // this.service.delete(post.id)
    //   .subscribe();

  }
}
