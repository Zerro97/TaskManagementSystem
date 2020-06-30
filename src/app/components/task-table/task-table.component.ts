import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {
  tasks = [{}];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<[]>('https://localhost:44360/api/Quote').subscribe(data => {
      this.tasks = data;
    });
  }
}
