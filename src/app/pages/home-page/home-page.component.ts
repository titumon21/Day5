import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
  }
)
export class HomePageComponent{
  constructor(private api: ApiService){}
  todos:any;
  newTaskTitle : string = '';

  addNewTask() {
    if (this.newTaskTitle.trim() !== '') {
      const newTask = { title: this.newTaskTitle, finished: false };
      this.todos.push(newTask);
      this.newTaskTitle = '';
    }
  }


  ngOnInit()
  {
    this.api.getTodo().subscribe((data: any)=>{
      this.todos=data
    })
  }

  delete(id: any) {
    this.todos = this.todos.filter((e : {id:any})=> e.id != id)
  }
}
