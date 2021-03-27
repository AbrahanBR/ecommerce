import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "creditCard"})

export class CreditCardPipe implements PipeTransform{
    transform(value: number){
        const creditCardNumber = value.toString()
        return  creditCardNumber.substr(creditCardNumber.length - 4);
    }
}