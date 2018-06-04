import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { reject } from 'q';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  private id;
  constructor(private routeParams: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    /* this.id = this.routeParams.snapshot.paramMap.get('userid');
      this method is used to route parameters when we don't have to navigate to the same component.....
    */
    this.routeParams.paramMap
      .subscribe(params => {
        this.id =  +params.get('userid');
        console.log(this.id);
      });

       Observable.combineLatest([
        this.routeParams.paramMap,
        this.routeParams.queryParamMap
        ]).subscribe(
        combinedObservable => {
          const id = combinedObservable[0].get('userid');
          const page = combinedObservable[1].get('page');
          console.log(id, page);
        //  We can call a service to by using the inputs from the two observables related to route parametrs too...
        //  this.service.getAll(id,page)
        //   .subscribe(data =>{});
        }
      );

  }

  programaticNavigator() {
    this.route.navigate(['/HttpExample'], {
      queryParams: {page: 1, order: 'new'}
    });
  }

}
