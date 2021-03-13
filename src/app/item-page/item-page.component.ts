import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PurchaseDialogComponent } from '../purchase-dialog/purchase-dialog.component';
import { CartService } from '../shared/cart/cart.service';
import { ItemInterface } from '../shared/item.interface';
import { ItemService } from '../shared/item/item.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {
  public id: number;
  public price: number;
  public productTitle: string;
  public productDescription: string;
  public image: string;
  private item: ItemInterface;

  showFiller = false;
  public favorite = false;

  constructor(
          private itemService: ItemService,
          private router: ActivatedRoute,
          private cartService: CartService,
          public dialog: MatDialog
          ) { }

  ngOnInit(): void {
    this.id = +this.router.snapshot.paramMap.get("id");
    this.itemService.getItem(this.id).subscribe((item) => {
      this.item = item;
      this.price = item.price;
      this.productTitle = item.title;
      this.productDescription = item.description;
      this.image = item.images;
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {item: this.item};
    this.dialog.open(PurchaseDialogComponent, dialogConfig);
  }
}
