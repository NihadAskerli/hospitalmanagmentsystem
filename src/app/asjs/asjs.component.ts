import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-asjs',
  templateUrl: './asjs.component.html',
  styleUrls: ['./asjs.component.css']
})
export class AsjsComponent {

  image!:any;

  constructor(private http:HttpClient){}

  ngOnInit():void{
    console.log(this.getData());
    this.getData().subscribe((res)=>{
      console.log(res);
      this.image=res;
      console.log(this.image);
    })
  }

  getData(){
    return this.http.get(
      "http://localhost:5000/api/v1/photo/1"
    )
  }

}
