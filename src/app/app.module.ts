import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';

import { HttpClientModule } from '@angular/common/http';
import { CribsService } from './services/cribs.service';

@NgModule({
  declarations: [
    AppComponent, // here there are all the components we have
    CribListingComponent, CribCardComponent
  ],
  imports: [
    BrowserModule// our imports
    , HttpClientModule
  ],
  providers: [CribsService], // our injectible services
  bootstrap: [AppComponent] // the main component of the app. the other will be its child components
})
export class AppModule { }
