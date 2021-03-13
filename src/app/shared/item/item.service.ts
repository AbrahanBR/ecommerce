import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ItemInterface } from "../item.interface";

@Injectable({
    providedIn: "root"
})

export class ItemService {
    private itemServiceUrl: string;

    constructor(private httpClient: HttpClient){
        this.itemServiceUrl = `${environment.service.url}/items`;
    }

    getItens(): Observable<ItemInterface[]>{
        return this.httpClient.get<ItemInterface[]>(this.itemServiceUrl);
    }

    getItem(id:number): Observable<ItemInterface>{
        return this.httpClient.get<ItemInterface>(`${this.itemServiceUrl}/${id}`);
    }
}