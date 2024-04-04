import { Component, OnInit } from "@angular/core";
import { ENDPOINTS } from "@core/urls.util";
import { CommonService } from "@service/common.service";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-expense",
  templateUrl: "./expense.component.html",
  styleUrls: ["./expense.component.scss"],
})
export class ExpenseComponent implements OnInit {
  expensesData: any[] = [];
  isAddExpenseDialog: boolean = false;
  expId:number=0;
 
  constructor(private service: CommonService,private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.getAllExpenses();
    this.primengConfig.ripple = true;
  }
  closeDialoge(event: any) {
    this.isAddExpenseDialog = false;
  }

  getAllExpenses(): void {
    this.service.getRecords(ENDPOINTS.FETCHEXPENSES).subscribe((data: any) => {
      console.log(data.results);
      if (data.results) {
        for (let key of Object.keys(data.results)) {
          this.expensesData.push(data.results[key]);
        }
        console.log(this.expensesData);
      }
    });
  }
  editExpense(expId:number):void {
    this.isAddExpenseDialog=true;
    this.expId=expId;
  }
  deleteExpense(data: any) {
    console.log(this.expensesData)
    this.service.deleteUserData(ENDPOINTS.DELETEEXPENSE, data.expId).subscribe({
      next: (value) => {
        alert("Advance deleted successfully");    
      }
    });
  }
}
