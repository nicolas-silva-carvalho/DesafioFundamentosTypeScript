import { DioAccount } from "./DioAccount";

export class EmployeeAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (money: number): void => {
       this.setBalance(money + 10)
    }
}
