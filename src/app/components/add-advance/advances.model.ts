export interface AdvancesDetails {
    advanceId: number,
    advanceName: string,
    date: string,
    empId: number,
    status: string,
    amount: number,
    description: string
}
export class AdvancesDetailsIml implements AdvancesDetails {
    advanceId: number;
    advanceName: string;
    date: string;
    empId: number;
    status: string;
    amount: number;
    description: string;
    constructor() {
        this.advanceId=0;
        this.advanceName="";
        this.date="";
        this.empId=0;
        this.status="";
        this.amount=0;
        this.description=""
    }
}