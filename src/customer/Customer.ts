interface Entity {
    id: string
}

export default class Customer implements Entity {
    email = "";
    phoneNumber = "";
    cpf = "";

    constructor(
        readonly id: string,
        readonly name: string
    ) { }
}

interface Specification<T extends Entity> {
    isSatisfiedBy(entity: T): any;
}

export class IsLeadSpecification implements Specification<Customer> {
    isSatisfiedBy(customer: Customer): boolean {
        if (customer.name && (customer.email || customer.phoneNumber))
            return true;
        return false;
    }
}

export class IsChargeableSpecification implements Specification<Customer>{
    isSatisfiedBy(customer: Customer) {
        if (customer.cpf && customer.email)
            return true;
        return false;
    }
}