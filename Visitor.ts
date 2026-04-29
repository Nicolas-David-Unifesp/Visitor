import { IncomeReport } from "./Report";
import { ExpenseReport } from "./Report";
import { DelinquencyReport } from "./Report";

/* Aqui são feitos a interface geral do Visitor. 
Um visitor para PDF, um para XLS e outro para HTML. Caso, seja necessário ter outra forma de conversão basta criar um novo visitor.*/

export interface Visitor{//Interface geral
    visitIncomeReport(r: IncomeReport): void;
    visitExpenseReport(r: ExpenseReport): void;
    visitDelinquencyReport(r: DelinquencyReport): void;
}

export class Visitor_PDF implements Visitor{//Visitor PDF
    constructor() {}

    visitIncomeReport(r: IncomeReport): void {//Simula que está gerando em PDF
        console.log("Generating PDF for Income Report");
    }

    visitExpenseReport(r: ExpenseReport): void {
        console.log("Generating PDF for Expense Report");
    }

    visitDelinquencyReport(r: DelinquencyReport): void {
        console.log("Generating PDF for Delinquency Report");
    }
}

export class Visitor_XLS implements Visitor{//Visitor XLS
    constructor() {}

    visitIncomeReport(r: IncomeReport): void {//Simula que está gerando em XLS
        console.log("Generating XLS for Income Report");
    }

    visitExpenseReport(r: ExpenseReport): void {
        console.log("Generating XLS for Expense Report");
    }

    visitDelinquencyReport(r: DelinquencyReport): void {
        console.log("Generating XLS for Delinquency Report");
    }
}

export class Visitor_HTML implements Visitor{// Visitor HTML
    constructor() {}

    visitIncomeReport(r: IncomeReport): void {//Simula que está gerando em HTML
        console.log("Generating HTML for Income Report");
    }

    visitExpenseReport(r: ExpenseReport): void {
        console.log("Generating HTML for Expense Report");
    }

    visitDelinquencyReport(r: DelinquencyReport): void {
        console.log("Generating HTML for Delinquency Report");
    }
}
