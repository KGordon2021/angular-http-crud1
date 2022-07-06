import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER= 'http://localhost:3000/products'; // we create  a private variable called rest api server and store the data from the database.json which is now on the url http:localHost: 3000/products

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() { // creating a method that returns the invoked get request from httpClient and on the folowing line in parenthese sends get request for the data stored in the rest api serve
    return this.httpClient.get<any[]>(this.REST_API_SERVER); // the <any[]> here specifies the return type and the code wont run properly  if any at all without it.
  }

  public selectItem(id: number) {
    return this.httpClient.get<any[]>(`${this.REST_API_SERVER}/${id}`);
  }
}
