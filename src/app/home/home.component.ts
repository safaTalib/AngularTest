import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  details: string='Details';
  studentName: string='';



onStudentNameChange(event:Event): void{
  this.studentName=(event.target as HTMLInputElement).value;
}
}
