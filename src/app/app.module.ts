import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';

import { HttpClientModule } from '@angular/common/http';
import { CribsService} from './services/cribs.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { FormsModule } from '@angular/forms';
import { UtilService } from './services/util.service';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent, // here there are all the components we have
    CribListingComponent, CribCardComponent, AddListingFormComponent, SortByPipe
  ],
  imports: [
    BrowserModule// our imports
    , HttpClientModule,
    FormsModule
  ],
  providers: [CribsService, UtilService], // our injectible services
  bootstrap: [AppComponent] // the main component of the app. the other will be its child components
})
export class AppModule { }
