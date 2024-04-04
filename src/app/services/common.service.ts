import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SERVERURL } from "@env/environment";
import { ResponseModel } from "@model/ResponseModel";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getRecords(endpoint: string): Observable<ResponseModel> {  
    return this.http.get<ResponseModel>(`${SERVERURL + endpoint}`);
  }

  getCurrentData(endpoint:string,id:number){  
    return this.http.get(`${SERVERURL + endpoint +id}`);
  }
  
  postData(endpoint: string, body: any) {
    return this.http.post(`${SERVERURL + endpoint}`, body);
  }

  updateUserData(endpoint: string, body: any) { 
    return this.http.put(`${SERVERURL + endpoint }`, body);
  }

  deleteUserData(endpoint: string, id: number): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(`${SERVERURL + endpoint + id}`);
  }
}
