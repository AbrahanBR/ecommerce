import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { UserInterface } from "../user.interface";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})

export class UserService {
    private serviceUrl: string;

    constructor(private httpClient: HttpClient){
        this.serviceUrl = `${environment.service.url}/users`;
    }

    login(userName: string, password: string): Observable<UserInterface>{
        return this.httpClient.get<UserInterface[]>(this.serviceUrl).pipe(map((users) => {
           const user = users.find((userFinded) => 
                (userFinded.userName === userName || userFinded.email === userName) && userFinded.password === password
            )

            if(!user){
                throw new Error("User Not Founded");
            }

            return user;
        }))
    }
}