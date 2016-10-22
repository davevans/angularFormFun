import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IAccount } from './account';
import { IPortfolio } from './portfolio';
import { IPosition } from './position';

@Component({
    selector: 'portfolio',
    templateUrl: "./app/portfolio.component.html"
})
export class PortfolioComponent implements OnInit {

    @Input()
    portfolio:IPortfolio;

    @Output()
    onIsValidChange: EventEmitter<Boolean> = new EventEmitter<boolean>();

    portfolioForm: FormGroup;

    constructor(private _fb: FormBuilder) {}

    ngOnInit(){
        this.portfolioForm = this._fb.group({
            cashBalance:[this.portfolio.cashBalance, [Validators.required, Validators.pattern("[0-9]+")]],
            positions: this._fb.array(this.getPositionFormGroups())
        })
        this.portfolioForm.statusChanges.subscribe(x => this.onStatusChanged(x));
        this.onStatusChanged(this.portfolioForm.valid);
    }

    getPositionFormGroups(): FormGroup[] {
        let groups:FormGroup[] = new Array<FormGroup>();
        this.portfolio.positions.forEach(p => {
            let group = this._fb.group({
                securityCode: [p.securityCode, [Validators.required]],
                volume:[p.volume, [Validators.required, Validators.pattern("[0-9]+")]],
                price:[p.price]
            })
            groups.push(group);
        });
        return groups;
    }

    onStatusChanged(e): void{
        var isValid = e === "VALID";
        this.onIsValidChange.emit(isValid);
    }
}