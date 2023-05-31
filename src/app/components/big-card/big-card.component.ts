import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string="https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg"
  cardTitle:string="Batman volta dos mortos"
  cardDescription:string="Elel morreu ou foi tudo fake?"
  constructor(){}
  ngOnInit(): void {
    
  }

  
}
