import IsLeadSpecification from "./IsLeadSpecification";

export interface Entity {
    id: string
}

export interface Specification<T extends Entity> {
    isSatisfiedBy(entity: T): any;
}

export default class Customer implements Entity {
    email = "";
    phoneNumber = "";
    cpf = "";
    likeChristmas = false;

    constructor(
        readonly id: string,
        readonly name: string
    ) { }

    isValidLead(specification: IsLeadSpecification<Customer>): boolean {       
        return specification.isSatisfiedBy(this);
    }
}