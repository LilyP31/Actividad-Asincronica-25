import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Addregistro } from '../models/addregistro';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { }

  // Definir la URL (EndPoint) de la API (La BaseURL de la API estara en environment.ts)
  apiVista = environment.apiURL + 'vista/';

  // Metodos GET para obtener datos de la API users

  getUsersAll():Observable<Addregistro[]>{
    return this.http.get<Addregistro[]>(this.apiVista);
  }

  getUserId(userId: string): Observable<Addregistro[]> {
    const url = environment.apiURL + userId;
    return this.http.get<Addregistro[]>(url);
  }

  // Metodo POSt para enviar datos a la API users

  postUser(usuario: Addregistro): Observable<Addregistro>{
    let nuevo = environment.apiURL + 'nuevo/';
    return this.http.post<Addregistro>(nuevo, usuario);
  }



  deleteUser(userId: string):Observable<string> {
    let nuevo = environment.apiURL + 'eliminar/' + userId;
    return this.http.delete<string>(nuevo);
  }

  updateUser(user: Addregistro):Observable<Addregistro> {
    let rutaApi = environment.apiURL + 'actualizar/';
    return this.http.put<Addregistro>(rutaApi,user);
  }


  // Metodo GET para el Interceptor
  
  /* getUsersAllInterceptor():Observable<any>{
    return this.http.get(this.apiVista, {observe: 'response'});
  } */

}
