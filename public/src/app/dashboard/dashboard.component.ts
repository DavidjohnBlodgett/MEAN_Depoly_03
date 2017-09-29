import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentsService } from '../_services/appointments.service';
import { UsersService } from '../_services/users.service';
import { Toolbox } from '../_services/-toolbox';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    toolbox = new Toolbox();

    currentUser:any;
    appointments:any;
    currentDate: Date = new Date();

    constructor(private _redirect: Router, private _usersService: UsersService, private _appointmentsService: AppointmentsService ) { }

    ngOnInit() {
        this.currentUser = this._usersService.getUserName();
        this._appointmentsService.getAll((data)=>{
            this.appointments = data;
        });
    }
    onDelete(id) {
        if(this.cancelNotVal(id)){
            this._appointmentsService.delete(id, ()=>{
                this._appointmentsService.getAll((data)=>{
                    this.appointments = data;
                });
            });
        } else {
            alert('You must cancel at least 1 day before the appointment schedule!');
            return;
        }
    }
    onCreate() {
        this._redirect.navigate(['/create']);
    }

    cancelNotVal(id) {
        var selectedAppointment = this.toolbox.search(this.appointments, '_id', id);

        var d1 = Date.parse(selectedAppointment.date);
        var d2 = Date.parse(this.currentDate.toLocaleDateString());
        if (((d1 - d2) / 3600000) < 24) {
            return false;
        } else {
            return true;
        }

    }

}
