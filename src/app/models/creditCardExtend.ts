import { CreditCard } from "./creditCard";

export interface CreditCardExtend extends CreditCard{
    cvv? : string;
}