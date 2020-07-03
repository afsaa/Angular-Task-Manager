import { Injectable } from '@angular/core';
import { Task } from './tasks/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class TasksDataService {
  tasks$: Observable<Task[]>;
  tasks: object[];

  fetchTasks() {
    return this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTasks() {
    return this.tasks;
  }

  addTask(id: number, title: string) {
    let newTask = { id, title, completed: false };
    this.tasks.push(newTask);
  }

  // markAsCompleted(taskId: number) {
  //   this.tasks.map((task) => {
  //     task.id === taskId && !task.completed
  //       ? (task.completed = true)
  //       : (task.completed = false);
  //   });
  // }

  constructor(private http: HttpClient) {}
}
