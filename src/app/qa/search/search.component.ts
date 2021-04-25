import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form)
    let query = form.value.query
    console.log(query)
  }

}
