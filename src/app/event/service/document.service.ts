import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Event } from '../event';
const API = environment.ApiUrl
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  public Event :Event[] ;
  constructor(private http:HttpClient) {
    this. Event = [];
   }
  create(doc:Event){
    return this.http.post<Event>(API+'/Event/article',doc)
  }
  update(id:string,doc:Event){
    
    return this.http.put<Event>(API+'/Event/article/'+id,doc)
  }
  delete(id:string){
    return this.http.delete<Event>(API+ '/Event/article/'+id)
  }
  get_All(){
    return this.http.get<Event[]>(API+'/Event/article')
  }
}
