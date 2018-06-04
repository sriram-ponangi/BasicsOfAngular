import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowersService, private routeParams: ActivatedRoute) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
    /*
    // Alternate way: to see the usage of
    // combineLatest, map and switchMap
    Observable.combineLatest([
      this.routeParams.paramMap,
      this.routeParams.queryParamMap
    ])
    .switchMap(combined => {
      // here combined is of type Observable<ParamMap[]> ie., combineLatest() returned it
      const id = combined[0].get('userid');
      const page = combined[1].get('page');
      return this.service.getAll();
      // .subscribe(followers => this.followers = followers);

      // if we use map then we return Observable<any>
      // if we use switchMap then we return any
    })
    .subscribe(
      combinedObservable => {
        this.followers = combinedObservable;
      //  We can call a service to by using the inputs from the two observables related to route parametrs too...
      //  this.service.getAll(id,page)
      //   .subscribe(data =>{});
      });
      */
  }
}
