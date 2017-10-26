import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx'; //Angular CLI supports rx js
import { Subject } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: Http) {}

  ngOnInit(): void {
    // handle http request
    this.getUser('sunshead')
        .subscribe(
          (res: Response) => console.log(res.json())
        )
  }
  getUser(username){
    return this.http.get('https://api.github.com/users/' + username);
  }
    //===================================================================
    //
    // const btn = document.querySelector('#btn');
    // const btnStream$ = Observable.fromEvent(btn, 'click');
    // btnStream$.subscribe(
    //   (e: any) => console.log(e.target.innerHTML),
    //   err => console.error(err),
    //   () => console.log('completed')
    // )
    //
    // const input = document.querySelector('#input');
    // const inputStream$ = Observable.fromEvent(input, 'keydown');
    // inputStream$.subscribe(
    //   (e: any) => console.log(e.target.value),
    //   err => console.error(err),
    //   () => console.log('completed')
    // )

    //====================================================================
    //
    // let promise = new Promise(resolve => {
    //   console.log('promise execution');
    //   setTimeout(() => {
    //     resolve('promise resolve');
    //   }, 1000);
    // });
    //
    // promise.then(value => console.log(value)); //log value after resolve

    // let stream$ = new Observable(function subscribe(observer) { //observable creation
    //   console.log('observable execution');
    //   observer.next(1);
    //   observer.next(2); // return multiple values
    //   let timeout = setTimeout(() => {
    //     observer.next('observer next value');
    //   }, 1000);
    //   observer.next(3);
    //
    //   return function unsubscribe() {
    //     clearTimeout(timeout);
    //   }
    // });
    //
    // let observer = {
    //   next: value => console.log(value),
    //   error: err => console.error(err),
    //   complete: () => console.log('completed!')
    // }
    //
    // let subscription = stream$.subscribe(observer); //get observer and execute the lazy computation
    // setTimeout(() => {
    //   subscription.unsubscribe(); // cancel observable
    // }, 500)
// ============================================================
    // let subject = new Subject();
    // subject.subscribe(
    //   v => console.log('observerA' + v)
    // )
    // subject.subscribe(
    //   v => console.log('observerB' + v)
    // )
    // subject.next(1);
    // subject.next(2);
    // subject.subscribe(
    //   v => console.log('observerC' + v)
    // )
    // subject.next(3);

    // implement same function in observable:
    // let observable = new Observable(observer => {
    //   observer.next(1);
    //   observer.next(2);
    // })
    //
    // observable.subscribe(
    //   v => console.log('observerAnew' + v)
    // )
    //
    // observable.subscribe(
    //   v => console.log('observerBnew' + v)
    // )
}
