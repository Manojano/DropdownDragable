import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  anime =[
    { id : 0 , name :'Naruto'},
    {id : 1, name : 'Luffy'},
    {id : 2, name : 'Ichigo'},
    {id : 3, name:'Mikey'},
    {id:4, name : 'Eren'},
    {id : 5, name : 'Goku'},
    {id:6, name : 'Hinata'},
    {id:7, name:'Gon'},
    {id:8, name: 'Midoriya'}
  ]

}
