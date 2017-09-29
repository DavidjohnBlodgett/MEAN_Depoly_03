import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppointmentsService {

    constructor( private _http: Http ) { }

    create(appointment) {
        return this._http.post('/appointments', appointment)
        .subscribe(
              (response) => {
                    return true;
              },
              (err) => {
                  console.log('ERROR FROM (POST) REQUEST TO API');
                  return false;
              }
        )
    }
    // update(id, appointment) {
    //     return this._http.put(`/appointments/${id}`, appointment)
    //     .subscribe(
    //           (response) => {
    //                 return true;
    //           },
    //           (err) => {
    //               console.log('ERROR FROM (POST) REQUEST TO API');
    //               return false;
    //           }
    //     )
    // }
    getAll(callback) {
        this._http.get('/appointments')
        .subscribe(
              (response) => {
                    callback(response.json());
              },
              (err) => {
                  console.log('ERROR FROM (POST) REQUEST TO API');
                  return false;
              }
        )
    }
    delete(id, callback) {
        return this._http.delete(`/appointments/${id}`)
        .subscribe(
              (response) => {
                    callback();
              },
              (err) => {
                  console.log('ERROR FROM (POST) REQUEST TO API');
                  return false;
              }
        )
    }

}
