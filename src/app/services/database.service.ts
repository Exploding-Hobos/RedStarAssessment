import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders ({ 
        'Content-Type' : 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    private _dbUrl = 'https://swapi.co/api/'

    constructor(private _http: HttpClient) { }

    getData(starsearches: string, userInput: string) : Observable<any> {
        return this._http.get<any>(`${this._dbUrl}${starsearches}/?search=${userInput}`, httpOptions)
    }


}