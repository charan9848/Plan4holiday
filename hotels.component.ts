import { Component ,OnInit} from '@angular/core';
import { Hotels } from '../model/hotels';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent   {

  hotels: Hotels[] = [];
  //hotelName: string = '';//
 // error: string = '';

  constructor(private hotelService: HotelService) { 

    this.getHotel()
  }

getHotel(){
  this.hotelService.getHotels().subscribe(hotel=>{this.hotels = hotel})
}






 // ngOnInit(): void {
    // You can optionally call the getHotels() method here to fetch all hotels
    // this.hotelService.getHotels().subscribe(
    //   hotels => this.hotels = hotels,
    //   error => this.error = 'Error fetching hotels'
    // );
 // }

 // searchHotelsByName(): void {
   // if (this.hotelName.trim() === '') {
  //    this.hotels = [];
   //   this.error = 'Please enter a hotel name';
   //   return;
  //  }

  //  this.hotelService.getHotelsByName(this.hotelName).subscribe(
  //    hotels => {
  //      this.hotels = hotels;
  //      this.error = '';
    //  },
 //     error => {
 //       this.hotels = [];
  //      this.error = 'Error fetching hotels';
      //}
  //  );
  //}

}
