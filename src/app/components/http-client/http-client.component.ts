import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  constructor(private http: HttpClient) { }
  title = 'app';
  results = '';
  data: any = {};
  login = '';
  img = '';
  loading = true;
  ngOnInit() {
    this.loadPerfilGitHub();
  }
  loadPerfilGitHub() {
    this.loading = true;
    this.http.get('https://api.github.com/users/jsmorales').subscribe( data => {
      console.log(data);
      setTimeout(() => {
        this.data = data;
        console.log(this.data.login);
        this.login = this.data.login;
        this.img = this.data.avatar_url;
        this.loading = false;
      }, 5000);
    });
  }

}
