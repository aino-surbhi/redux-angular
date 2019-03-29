import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgRedux,NgReduxModule} from '@angular-redux/store';
import { AppComponent } from './app.component';
import { rootReducer, IAppState } from './store/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

   constructor(private ngRedux: NgRedux<IAppState>){

    this.ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
    );

  }

}



