import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { Child } from "../model/child.model";
import { FetchDataService } from "../service/fetch-data.service";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit, OnChanges {
    @Input() selectedParentId!: number;
    @Output() childNotFound = new EventEmitter<string>();

    Age: any;

    constructor(
        private fetchDataService: FetchDataService
    ) {}

    ngOnInit(): void {
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.getChildData(this.selectedParentId);
    }

    getChildData(Id: number) {
        // debugger;
        this.fetchDataService.getChild().subscribe((data: any) => {
            let childData:Child = data.find((child: Child) => child.id == Id)
            if (childData) {
                this.Age = childData.age;
            }
            else if (this.selectedParentId) {
                this.childNotFound.emit('child not found!');
            }
        })
    }

}