import { IncomeReport } from "./Report";
import { ExpenseReport } from "./Report";
import { DelinquencyReport } from "./Report";
import { Visitor_HTML, Visitor_XLS, Visitor_PDF } from "./Visitor";

//Exemplo de uso do código

const incomeReport = new IncomeReport(1000);// Criando um relatório de renda com valor 1000
const expenseReport = new ExpenseReport(500);// Criando um relatório de despesas com valor 500
const delinquencyReport = new DelinquencyReport(200);// Criando um relatório de inadimplência com valor 200

incomeReport.accept(new Visitor_PDF());// Gerando um PDF para o relatório de renda
expenseReport.accept(new Visitor_XLS());// Gerando um XLS para o relatório de despesas
delinquencyReport.accept(new Visitor_HTML());// Gerando um HTML para o relatório de inadimplência
incomeReport.accept(new Visitor_XLS());
