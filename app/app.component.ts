import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { IAccount } from './account';
import { IPortfolio } from './portfolio';
import { IPosition } from './position';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html'
})
export class AppComponent implements OnInit { 
    account: IAccount;
    portfolioFormValid: boolean;

    constructor(private _fb:FormBuilder){
        
    }

    ngOnInit(){
        console.log("init");
        this.account = 
        {
            accountNumber: "12345",
            portfolio: {
                portfolioCode: "345678",
                cashBalance: 78487.23,
                positions: [
                    { securityCode:"BHP", volume:123, price:19.89 },
                    { securityCode:"CBA", volume:456, price:84 },
                    { securityCode:"AMP", volume:88, price:6.20 }
                ]
            }
        } as IAccount;
    }

    onPortfolioStatusChanged(e): void{
        this.portfolioFormValid = e;
    }

    onSave(form): void {
        if(form)
        {
            console.log(form.value);
        }
    }

}
