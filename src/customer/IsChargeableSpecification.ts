import Customer, { Specification } from "./Customer";

export default class IsChargeableSpecification implements Specification<Customer>{
    isSatisfiedBy(customer: Customer) {
        if (customer.cpf && customer.email)
            return true;
        return false;
    }
}