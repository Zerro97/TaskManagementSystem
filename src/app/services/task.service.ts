import { Subject } from 'rxjs';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
    private tasks = new Subject<Task[]>();

    constructor(private http : HttpClient) {
        this.http.get<[]>('https://localhost:44360/api/Quote').subscribe(data => {
            if(data) {
                this.tasks.next(data);
            }
        });
    }

    getTask() {
        return this.tasks.asObservable();
    }
}