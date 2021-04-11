import { CreditCardExtend } from "./creditCardExtend";

export interface Payment{
    rentalId            : number;
    payCard             : CreditCardExtend;
    isSave              : boolean;
}