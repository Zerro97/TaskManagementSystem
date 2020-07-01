import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {
  tasks: Observable<Task[]>;
  page: number = 1;
  pageSize: number = 5;
  collectionSize: number;

  constructor(private service: TaskService) {
    this.tasks = service.getTask();
  }

  ngOnInit(): void {

  }
}
