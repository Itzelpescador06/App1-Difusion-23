





import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})
export class ServicioService{
    URL= "localhost/BACKEND/getAll.php";

    constructor(private http:HttpClient){

    }
    get (){
        return this.http.get(this.URL);

    }

    /*GetById(Id:String){
        return new Observable(observer =>{
            this.get().subscribe((result:any[])=>{
                const filtro = result.filter(item =>
                    item.id === Id)
            return observer.next(filtro[0]);
            })
        })
    }*/

}