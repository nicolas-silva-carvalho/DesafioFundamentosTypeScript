export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

    // setName = (name: string): void => {
    //     this.name = name
    // }

    getName = (): string => {
        return this.name
    }

    // setAccountNumber = (account: number): void => {
    //     this.accountNumber = account
    // }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    getBalance = (): number => {
        return this.balance
    }

    setBalance = (cash: number): void => {
        this.balance += cash
    }

    deposit = (money: number): void => {
        if (this.validateStatus()) {
            this.balance += money
            console.log('Você depositou')
        }
    }

    withdraw = (money: number): void => {
        if (this.validateStatus() && this.balance >= money){
            this.balance -= money
            console.log('Você sacou')
        }    
    }

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error()
    }
}