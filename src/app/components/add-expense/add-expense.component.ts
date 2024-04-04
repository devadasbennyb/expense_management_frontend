import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from "@angular/forms";
import { ENDPOINTS } from "@core/urls.util";
import { CommonService } from "@service/common.service";
import { DropDown } from "./dropdown.model";
@Component({
  selector: "app-add-expense",
  templateUrl: "./add-expense.component.html",
  styleUrls: ["./add-expense.component.scss"],
})
export class AddExpenseComponent implements OnInit {
  @Input() expId: number=0;
  @Output() closeDialog: EventEmitter<any> = new EventEmitter();
  addExpense!: FormGroup;
  employeeModel!: FormGroup;
  expenseTypeModel!: FormGroup;
  paymentModel!: FormGroup;
  isSubmitted: boolean = false;
  save:boolean=true;
  update:boolean=false;

  constructor(private formBuilder: FormBuilder, private service: CommonService) { }

  ngOnInit(): void {
    this.addExpense = new FormGroup({
      expId: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      merchant: new FormControl('', Validators.required),
      employeeModel: new FormGroup({
        empId: new FormControl('', Validators.required),
      }),
      expenseTypeModel: new FormGroup({
        expenseTypeId: new FormControl('', Validators.required),
      }),
      paymentModel: new FormGroup({
        payId: new FormControl('', Validators.required),
      }),
      amount: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      currency: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      addToReports: new FormControl('', Validators.required),
    })
  } 
  ngOnChanges(){
    if(this.expId){
      this.save=false;
      this.update=true;
      this.service.getCurrentData(ENDPOINTS.FETCHCURRENTEXPNESE, this.expId).subscribe((response: any) => {
        console.log(response.results);
        this.addExpense.patchValue(response.results) ;
      })
    }
  }

  saveExpense() {
    console.log(this.addExpense.getRawValue());
    this.service.postData(ENDPOINTS.SAVEEXPENSE, this.addExpense.getRawValue()).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("Expense Added successfully");
      }
    })
  }
  
  UpdateExpesne() {
    console.log(this.addExpense.getRawValue());
    this.service.updateUserData(ENDPOINTS.UPDATEEXPENSE, this.addExpense.getRawValue()).subscribe({
      next: (data: any) => {
        console.log(data);
        alert("Expense Updated successfully");
      }
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.addExpense.controls;
  }

  onSubmit() {
    this.closeDialog.emit(true);
  }

  onReset() {
    this.addExpense.reset();
  }

  currencyList: DropDown[] = [
    { code: "AFN", name: "Afghanistan Afghanis – AFN" },
    { code: "ALL", name: "Albania Leke – ALL" },
    { code: "DZD", name: "Algeria Dinars – DZD" },
    { code: "ARS", name: "Argentina Pesos – ARS" },
    { code: "AUD", name: "Australia Dollars – AUD" },
    { code: "ATS", name: "Austria Schillings – ATS" },
    { code: "BSD", name: "Bahamas Dollars – BSD" },
    { code: "BHD", name: "Bahrain Dinars – BHD" },
    { code: "BDT", name: "Bangladesh Taka – BDT" },
    { code: "BBD", name: "Barbados Dollars – BBD" },
    { code: "BEF", name: "Belgium Francs – BEF" },
    { code: "BMD", name: "Bermuda Dollars – BMD" },
    { code: "BRL", name: "Brazil Reais – BRL" },
    { code: "BGN", name: "Bulgaria Leva – BGN" },
    { code: "CAD", name: "Canada Dollars – CAD" },
    { code: "XOF", name: "CFA BCEAO Francs – XOF" },
    { code: "XAF", name: "CFA BEAC Francs – XAF" },
    { code: "CLP", name: "Chile Pesos – CLP" },
    { code: "CNY", name: "China Yuan Renminbi – CNY" },
    { code: "COP", name: "Colombia Pesos – COP" },
    { code: "XPF", name: "CFP Francs – XPF" },
    { code: "CRC", name: "Costa Rica Colones – CRC" },
    { code: "HRK", name: "Croatia Kuna – HRK" },
    { code: "CYP", name: "Cyprus Pounds – CYP" },
    { code: "CZK", name: "Czech Republic Koruny – CZK" },
    { code: "DKK", name: "Denmark Kroner – DKK" },
    { code: "DEM", name: "Deutsche (Germany) Marks – DEM" },
    { code: "DOP", name: "Dominican Republic Pesos – DOP" },
    { code: "NLG", name: "Dutch (Netherlands) Guilders - NLG" },
    { code: "XCD", name: "Eastern Caribbean Dollars – XCD" },
    { code: "EGP", name: "Egypt Pounds – EGP" },
    { code: "EEK", name: "Estonia Krooni – EEK" },
    { code: "EUR", name: "Euro – EUR" },
    { code: "FJD", name: "Fiji Dollars – FJD" },
    { code: "FIM", name: "Finland Markkaa – FIM" },
    { code: "FRF", name: "France Francs – FRF" },
    { code: "DEM", name: "Germany Deutsche Marks – DEM" },
    { code: "XAU", name: "Gold Ounces – XAU" },
    { code: "GRD", name: "Greece Drachmae – GRD" },
    { code: "GTQ", name: "Guatemalan Quetzal – GTQ" },
    { code: "NLG", name: "Holland (Netherlands) Guilders – NLG" },
    { code: "HKD", name: "Hong Kong Dollars – HKD" },
    { code: "HUF", name: "Hungary Forint – HUF" },
    { code: "ISK", name: "Iceland Kronur – ISK" },
    { code: "XDR", name: "IMF Special Drawing Right – XDR" },
    { code: "INR", name: "India Rupees – INR" },
    { code: "IDR", name: "Indonesia Rupiahs – IDR" },
    { code: "IRR", name: "Iran Rials – IRR" },
    { code: "IQD", name: "Iraq Dinars – IQD" },
    { code: "IEP", name: "Ireland Pounds – IEP" },
    { code: "ILS", name: "Israel New Shekels – ILS" },
    { code: "ITL", name: "Italy Lire – ITL" },
    { code: "JMD", name: "Jamaica Dollars – JMD" },
    { code: "JPY", name: "Japan Yen – JPY" },
    { code: "JOD", name: "Jordan Dinars – JOD" },
    { code: "KES", name: "Kenya Shillings – KES" },
    { code: "KRW", name: "Korea (South) Won – KRW" },
    { code: "KWD", name: "Kuwait Dinars – KWD" },
    { code: "LBP", name: "Lebanon Pounds – LBP" },
    { code: "LUF", name: "Luxembourg Francs – LUF" },
    { code: "MYR", name: "Malaysia Ringgits – MYR" },
    { code: "MTL", name: "Malta Liri – MTL" },
    { code: "MUR", name: "Mauritius Rupees – MUR" },
    { code: "MXN", name: "Mexico Pesos – MXN" },
    { code: "MAD", name: "Morocco Dirhams – MAD" },
    { code: "NLG", name: "Netherlands Guilders – NLG" },
    { code: "NZD", name: "New Zealand Dollars – NZD" },
    { code: "NOK", name: "Norway Kroner – NOK" },
    { code: "OMR", name: "Oman Rials – OMR" },
    { code: "PKR", name: "Pakistan Rupees – PKR" },
    { code: "XPD", name: "Palladium Ounces – XPD" },
    { code: "PEN", name: "Peru Nuevos Soles – PEN" },
    { code: "PHP", name: "Philippines Pesos – PHP" },
    { code: "XPT", name: "Platinum Ounces – XPT" },
    { code: "PLN", name: "Poland Zlotych – PLN" },
    { code: "PTE", name: "Portugal Escudos – PTE" },
    { code: "QAR", name: "Qatar Riyals – QAR" },
    { code: "RON", name: "Romania New Lei – RON" },
    { code: "ROL", name: "Romania Lei – ROL" },
    { code: "RUB", name: "Russia Rubles – RUB" },
    { code: "SAR", name: "Saudi Arabia Riyals – SAR" },
    { code: "XAG", name: "Silver Ounces – XAG" },
    { code: "SGD", name: "Singapore Dollars – SGD" },
    { code: "SKK", name: "Slovakia Koruny – SKK" },
    { code: "SIT", name: "Slovenia Tolars – SIT" },
    { code: "ZAR", name: "South Africa Rand – ZAR" },
    { code: "KRW", name: "South Korea Won – KRW" },
    { code: "ESP", name: "Spain Pesetas – ESP" },
    { code: "XDR", name: "Special Drawing Rights (IMF) – XDR" },
    { code: "LKR", name: "Sri Lanka Rupees – LKR" },
    { code: "SDD", name: "Sudan Dinars – SDD" },
    { code: "SEK", name: "Sweden Kronor – SEK" },
    { code: "CHF", name: "Switzerland Francs – CHF" },
    { code: "TWD", name: "Taiwan New Dollars – TWD" },
    { code: "THB", name: "Thailand Baht – THB" },
    { code: "TTD", name: "Trinidad and Tobago Dollars – TTD" },
    { code: "TND", name: "Tunisia Dinars – TND" },
    { code: "TRY", name: "Turkey New Lira – TRY" },
    { code: "AED", name: "United Arab Emirates Dirhams – AED" },
    { code: "GBP", name: "United Kingdom Pounds – GBP" },
    { code: "USD", name: "United States Dollars – USD" },
    { code: "VEB", name: "Venezuela Bolivares – VEB" },
    { code: "VND", name: "Vietnam Dong – VND" },
    { code: "ZMK", name: "Zambia Kwacha – ZMK" },
  ];
}




