import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos:Todo[]
  // [
  //   new Todo(1,'Learn to Dance',false,new Date()),
  //   new Todo(2,'Become an Expert at Angular',false,new Date()),
  //   new Todo(3,'Visit India',true, new Date())
  // ]
  // todo = {
  //   id:1,
  //   description:'Learn to Dance'
  // }
  message:string;
  constructor(private todoService:TodoDataService, private router:Router) { }

  ngOnInit() {
    this.refreshTodos()
  }
  refreshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(res=>{
      console.log(res);
      this.todos = res;
    });
  }
  deleteTodo(id){
    this.todoService.deleteTodo('in28minutes',id).subscribe(res=> {
      console.log(res)
      this.message = `Delete of Todo ${id} Successful`
      this.refreshTodos();
    })
  }
  updateTodo(id){
    this.router.navigate(['todos',id])
  }
  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
