import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifairs } from 'src/app/models/fairs';

@Component({
  selector: 'app-fairs-cards',
  templateUrl: './fairs-cards.component.html',
  styleUrls: ['./fairs-cards.component.scss']
})
export class FairsCardsComponent implements OnInit {
@Input() fairobj !:Ifairs


  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
 
    
  
  
      

   
   
      
    

  }

}
