import { Component, OnInit } from '@angular/core';
import { faEye, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-task]',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  faEye = faEye;
  faTrash = faTrash;
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

  onViewTask() {
    
  }

  onUpdateTask() {

  }

  onDeleteTask() {

  }
}
