import { Injectable } from '@angular/core';
import { Problem } from "../models/problem.model";
import { PROBLEMS } from "../mock-problems";
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class DataService {

  private problemSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: Http) { }

  getProblems(): Observable<Problem[]> {  //return observable
    this.http.get("api/v1/problems")
      .toPromise()
      .then((res: Response) => {
        this.problemSource.next(res.json());
      })
      .catch(this.handleError);

    return this.problemSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {  //return promise
    return this.http.get(`api/v1/problems/${id}`)
          .toPromise()
          .then((res: Response) => res.json())
          .catch(this.handleError)
  }

  addProblem(problem: Problem): Promise<Problem> {
    let headers = new Headers({ 'content-type': 'application/json'});
    return this.http.post('/api/v1/problems', problem, headers)
      .toPromise()
      .then((res: Response) => {
        this.getProblems(); //shua xin
        return res.json();
      })
      .catch(this.handleError)
  }

  buildAndRun(data): Promise<Object> {
    let headers = new Headers({ 'content-type': 'application/json'});
    return this.http.post('/api/v1/build_and_run', data, headers)
      .toPromise()
      .then((res: Response) => {
        console.log(res); //shua xin
        return res.json();
      })
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.body || error);
  }

}