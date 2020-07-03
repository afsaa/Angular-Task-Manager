import { Component, OnInit } from '@angular/core';
import { TasksDataService } from '../tasks-data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass'],
})
export class TasksComponent implements OnInit {
  taskListHeading = 'Lista de Tareas';
  tasks: object[];
  taskFormControl = new FormControl('', [Validators.required]);

  constructor(private tasksService: TasksDataService) {
    this.tasks = tasksService.getTasks();
  }

  ngOnInit(): void {
    this.tasksService.fetchTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  // handleTaskClick(taskId: number) {
  //   this.tasksService.markAsCompleted(taskId);
  // }

  handleSubmit(f: NgForm) {
    if (!this.taskFormControl.hasError('required')) {
      this.tasksService.addTask(
        Math.floor(Math.random() * 100),
        this.taskFormControl.value
      );
    }
    this.taskFormControl.reset('');
  }
}
