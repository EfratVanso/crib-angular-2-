import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CribsService } from './../services/cribs.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm; // 'link' to the form in the html (form of type 'NgForm')
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];

  constructor(public cribService: CribsService) {
    // private utilService: UtilService;

  }

  ngOnInit(): void {
  }
  onCribSubmit(data): void{
    // console.log(data);
    this.cribService.addCrib(data);
    this.newCribForm.reset();//reset the form
  }

}
