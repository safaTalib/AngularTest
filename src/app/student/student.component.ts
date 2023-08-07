import { Component } from '@angular/core';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  Mark: number=0;

  studentList: any[] = [
    { Name:'Safa ', Email:'sss@gmail.com ', Mark: 55},
    { Name:'Ahmad ', Email:'aaa@gmail.com', Mark: 30},
    
  ];

  getMarkColor(Mark: number): string {
    return Mark < 50 ? 'red-text' : 'green-text';
  }

  getPassFailStatus(Mark: number): string {
    return Mark > 50 ? 'PASS' : 'FAIL';
}


}
