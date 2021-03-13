import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() public title: string;
  @Input() public image: string;
  @Input() public price: number;
  @Input() public id: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirection(){
    this.router.navigate(["itemPage",this.id]);
  }

}
