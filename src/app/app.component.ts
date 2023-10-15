import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Vivek';
  // name : string = 'V';
  newTask = '';
  errMsg = '';
  currentIndex = 0;
  // b :boolean =false;
  isEdit = false;
  todo : string[] = [];

  add(newTask : string) {
    // if(newTask.length>0) { //if given string is not empty then add element to array (cons : User can't see any action if he add empty string so this is not right approach)
    /* if(newTask.trim()  == '') {
    //   this.todo.push(newTask);
    //   this.b=false;
    // } else {
    //   this.b=true;
     } */
     if(newTask.trim() != '') {
      this.todo.push(newTask);
      this.newTask = ''; //input field empty after adding task 
     } else {
      this.errMsg = "Please enter value";
     }
    // this.todo.push(newTask);
  }
  deleteTask(index : number) {
    this.todo.splice(index,1);
  }
  // deleteTask(task : string) {
  //   const index = this.todo.indexOf(task);
  //   this.todo.splice(index,1);
  // }
  editTask(index : number) {
    this.isEdit = true;
    this.currentIndex = index;
    this.newTask =this.todo[index];
  }
  update() {
    this.todo[this.currentIndex] = this.newTask;
    this.isEdit=false;
    this.newTask = ''
  }
  cancel() {
    this.isEdit=false;
    this.newTask='';
  }
}
