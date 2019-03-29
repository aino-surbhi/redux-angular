import { Component } from '@angular/core';
import {NgRedux,NgReduxModule} from '@angular-redux/store';
import { INCREMENT, DECREMENT } from './actions/counter.action';
import { rootReducer, IAppState } from './store/index';
import {  select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-angular';
  counter=0;
@select('counter') public counter$: Observable<any>;
   constructor(private ngRedux: NgRedux<IAppState>){
   }
   increment(){

      this.ngRedux.dispatch({ type: INCREMENT });
  }
   
     
}




