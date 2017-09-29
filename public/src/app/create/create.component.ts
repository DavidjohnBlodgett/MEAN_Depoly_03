import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';
import { AppointmentsService } from '../_services/appointments.service';
import { Appointment } from '../_models/appointment';
import { Toolbox } from '../_services/-toolbox';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    toolbox = new Toolbox();

    dateToLowError: boolean= false;
    maxAppError: boolean= false;
    UserMaxError: boolean= false;

    currentUser:any;
    appointmentForm: Appointment = new Appointment();
    currentDate: Date = new Date();
    allAppointments: Appointment[];

    constructor( private _redirect: Router, private _usersService: UsersService, private _appointmentsService: AppointmentsService) {
        this.currentUser = this._usersService.getUserName();
        this._appointmentsService.getAll((data) => {
           this.allAppointments = data;
        });

    }

    ngOnInit() {
    }

    onSubmit() {
        if(this.dateToLowVal()){
            alert('You must enter a date in the future!');
            return;
        } else {
            if(this.isUserMax()){
                alert('You can only only have 1 appointment scheduled per day!');
                return;
            } else {
                if(this.isMaxAppVal()){
                    alert('There can be only up to three(3) appointments per day!')
                    return;
                }else {
                    this.appointmentForm['name'] = this.currentUser;
                    this._appointmentsService.create(this.appointmentForm);
                    this._redirect.navigate(['/dashboard']);
                }
            }
        }
    }
    onCancel() {
        this._redirect.navigate(['/dashboard']);
    }
    dateToLowVal() {
        if( this.appointmentForm.date && this.currentDate) {

            var d1 = Date.parse(this.appointmentForm.date);
            var d2 = Date.parse(this.currentDate.toLocaleDateString());

            if (d1 >= d2) {
                this.dateToLowError = true;
                return false;
            } else {
                this.dateToLowError = false;
                return true;
            }
        }
    }
    isMaxAppVal() {
        var currentAppointmentsOnDay = this.toolbox.searchAll(this.allAppointments, 'date', this.appointmentForm.date );
        if(currentAppointmentsOnDay.length >= 3 ){
            this.maxAppError = true;
            return true;
        } else {
            this.maxAppError = false;
            return false;
        }
    }
    isUserMax() {
        var currentAppointmentsOnDay = this.toolbox.searchAll(this.allAppointments, 'date', this.appointmentForm.date );
        var AppsFilteredByUser = this.toolbox.searchAll(currentAppointmentsOnDay, 'name', this.currentUser);
        if(AppsFilteredByUser.length > 0) {
            this.UserMaxError = true;
            return true;
        } else {
            this.UserMaxError = false;
            return false;
        }
    }


}
