import { Component, Inject, Input } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CartService } from "../shared/cart/cart.service";
import { ItemInterface } from "../shared/item.interface";

@Component({
    selector: 'purchase-dialog',
    templateUrl: './purchase-dialog.component.html',
    styleUrls: ['./purchase-dialog.component.scss']
})

export class PurchaseDialogComponent {
    public item: ItemInterface;

    constructor(
        @Inject(MAT_DIALOG_DATA) data,
        private cartService: CartService
        ) {
        this.item = data.item;
    }

    addToCart(){
        this.cartService.addToCart(this.item).subscribe((teste) => {console.log(this.item)});
    }
}