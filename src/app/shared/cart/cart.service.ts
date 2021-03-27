import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ItemInterface } from "../item.interface";
import { ItemService } from "../item/item.service";
import { UserService } from "../user/user.service";

@Injectable({
    providedIn: "root"
})

export class CartService {
    private cartServiceUrl: string;
    private itemCartAmount: BehaviorSubject<ItemInterface[]> = new BehaviorSubject<ItemInterface[]>([]);
    
    constructor(
        private httpClient: HttpClient, 
        private userService: UserService,
        private itemService: ItemService
        ){
        const user = this.userService.getUserDetails();
        this.cartServiceUrl = `${environment.service.url}/users`;

        if(user){
            itemService.getItens().subscribe((itens) => {
                const itensSub = user.cart.reduce((itensRed, itemId) => {
                    const item = itens.find((itemFindId) => itemFindId.id == itemId) 
                    if(item){
                        itensRed.push(item);
                    } 
                    return itensRed;
                },[]);
                this.itemCartAmount.next(itensSub);    
            });
            
        }
    }

    addToCart(item: ItemInterface): Observable<void>{
        const user = this.userService.getUserDetails();
        if(user){
            user.cart.push(item.id);
            localStorage.setItem("user",JSON.stringify(user));
            this.itemCartAmount.next([
                ...this.itemCartAmount.value, item
            ]);
            return this.httpClient.put<void>(`${this.cartServiceUrl}/${user.id}`, user);
        }
    }

    deleteToCart( id: number): Observable<void>{
        const user = this.userService.getUserDetails();
        if(user){
            const index = user.cart.findIndex((productId) => productId === id);
            const cartItens = [...this.itemCartAmount.value];
            const itemCartIndex = cartItens.findIndex((item) => item.id === id);
            
            cartItens.splice(itemCartIndex, 1);
            this.itemCartAmount.next(cartItens);

            user.cart.splice(index,1);
            localStorage.setItem("user",JSON.stringify(user));
            return this.httpClient.put<void>(`${this.cartServiceUrl}/${user.id}`, user);
        }
    }

    getItemCart(): Observable<ItemInterface[]>{
        return this.itemCartAmount.asObservable();

    }
}