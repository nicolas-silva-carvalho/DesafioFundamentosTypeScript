import { CompanyAccount } from "./class/CompanyAccount"
import { EmployeeAccount } from "./class/EmployeeAccount"
import { PeopleAccount } from "./class/PeopleAccount"

const companyAccount: CompanyAccount = new CompanyAccount('Nick', 1)
console.log(companyAccount.getName())

const employee: EmployeeAccount = new EmployeeAccount('Nicolas', 2)
employee.deposit(100)
console.log(employee.getBalance())


const people: PeopleAccount = new PeopleAccount('Silva', 5, 1)
people.deposit(100)
console.log(people.getBalance())