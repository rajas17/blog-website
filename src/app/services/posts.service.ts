import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Environment } from '../environment/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http:HttpClient,) { }

  addPost(data:any):Observable<any>{
    return this._http.post<any>(`${Environment.apiUrl}/api/Post/addPost`,data)
  }

  getPosts():Observable<any>{
    return this._http.get<any>(`${Environment.apiUrl}/api/Post/getAllPosts`)
  }

  getLatestPosts(): Observable<any[]> {
    return this._http.get<any[]>(`${Environment.apiUrl}/api/Post/getLatestPosts`)
  }

  getSinglePost(id:any):Observable<any>{
    return this._http.get<any>(`${Environment.apiUrl}/api/Post/getSinglePost/${id}`)
    
  }
 

  updatePost(id:any,data:any):Observable<any>{
    return this._http.put(`${Environment.apiUrl}/api/Post/editPost/${id}`,data)
  }

  deletePost(id:any):Observable<any>{
    return this._http.delete(`${Environment.apiUrl}/api/Post/deletePost/${id}`)
  }

  getByCategory(categoryId:string):Observable<any>{
    return this._http.get(`${Environment.apiUrl}/api/Post/getByCategory/${categoryId}`)
  }

  getCount():Observable<any>{
    return this._http.get(`${Environment.apiUrl}/api/Post/getCount`)
  }

  addView(id:any):Observable<any>{
    return this._http.put(`${Environment.apiUrl}/api/Post/addView/`+id,{});
  }

  gettotalViews(){
    return this._http.get(`${Environment.apiUrl}/api/Post/getAllViews`)
  }

  getViewsbyCategory():Observable<any>{
    return this._http.get(`${Environment.apiUrl}/api/Post/getCategoryViews`)
  }

  getPostsbyViews():Observable<any>{
    return this._http.get(`${Environment.apiUrl}/api/Post/getPostsByViews`)
  }
}
