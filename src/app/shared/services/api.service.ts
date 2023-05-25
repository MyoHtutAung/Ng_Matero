import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Customer } from '@shared/interfaces/grid_data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

/*   updateCustomer(customer: Customer): Observable<any> {
    const url = `${this.apiUrl}/customers/${customer.id}`;
    return this.http.put(url, customer);
  } */

  getCustomerList(customer: Customer): Observable<Customer[]> {
    const url = `${this.apiUrl}/customers`;
    return this.http.get<Customer[]>(url);
  }
}
