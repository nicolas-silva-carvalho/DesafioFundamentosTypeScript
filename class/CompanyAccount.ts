import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (money: number): void => {
        if(this.validateStatus()){
            this.setBalance(money)
            console.log('Você pegou um emprestimo.')
        }  
    }
}
