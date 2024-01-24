import Customer from "./Customer";
import IsLeadSpecification from "./IsLeadSpecification";

export class IsLeadBlackFridaySpecification implements IsLeadSpecification<Customer> {
    
    isSatisfiedBy(customer: Customer): boolean {
        if (customer.name && (customer.email || customer.phoneNumber))
            return true;
        return false;
    }
}