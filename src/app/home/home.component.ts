import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item/item.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public itemAmount;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItens().subscribe((itens) => {
      this.itemAmount = itens;
    })
  }

}
