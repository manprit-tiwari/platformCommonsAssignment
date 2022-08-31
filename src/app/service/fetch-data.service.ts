import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class FetchDataService {

    constructor(
        private http: HttpClient
    ) { }
    
    getAllPatent() {
        return this.http.get('../../assets/data/parent.json');
    }

    getChild() {
        return this.http.get('../../assets/data/child.json');
    }
}