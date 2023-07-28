import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {

  holidayDestinations = [
    {
      name: 'Manali',
      description: 'Nakee La is a high mountain pass at an elevation of 15,647ft above the sea level. The pass is traversed by the Manali-Leh-Highway,',
      imageUrl: 'https://images.unsplash.com/photo-1574701427742-acc058398496?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
      state: 'hidden'
    },
    {
      name: 'Kerala',
      description: 'Look deep into nature, and then you will understand everything better',
      imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
      state: 'hidden'
    },
   
    // Add more destinations if needed
  ];

  

}
