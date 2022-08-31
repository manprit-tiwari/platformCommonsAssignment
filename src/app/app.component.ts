import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Parent } from './model/parent.model';
import { FetchDataService } from './service/fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'platformCommonsAssignment';
  selectedParentId!: number;
  parentData!: Parent[];
  childNotFoundMessage: boolean = false;

  

  parentForm = new FormGroup({
    'parent': new FormControl(null)
  })

  constructor(private fetchDataService: FetchDataService) { }

  ngOnInit(): void {
    this.getParentData();
    this.parentValueChange();
  }

  getParentData() {
    this.fetchDataService.getAllPatent().subscribe((data: any) => {
      this.parentData = data;
      console.log(this.parentData);
    })
  }

  parentValueChange() {
    this.parentForm.get('parent')?.valueChanges.subscribe((data: any) => {
      this.childNotFoundMessage = false;
      this.selectedParentId = data;
      console.log('selected Parent Id ::', this.selectedParentId);
    })
  }

  childNotFound(event: any) {
    this.childNotFoundMessage = true;
    console.log(event);
  }

}
