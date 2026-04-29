/*Aqui ficaria a parte dos Relatórios. 
Então, aqui são feitos os relatórios e depois a operação de convertê-los fica a critério do visitor*/

import { Visitor } from "./Visitor";

export interface Report{// Interface de Relatórios
    accept(v: Visitor): void;
}

export class IncomeReport implements Report{//Relatório de Renda
    constructor(public income: number) {}

    accept(v: Visitor): void {
        v.visitIncomeReport(this);
    }
}
export class ExpenseReport implements Report{ //Relatório de Despezas
    constructor(public expense: number) {}

    accept(v: Visitor): void {
        v.visitExpenseReport(this);
    }
}

export class DelinquencyReport implements Report{//Relatório de Inadimplencia
    constructor(public delinquency: number) {}

    accept(v: Visitor): void {
        v.visitDelinquencyReport(this);
    }
}






