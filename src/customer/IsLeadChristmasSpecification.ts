import Customer from "./Customer";
import IsLeadSpecification from "./IsLeadSpecification";

export default class IsLeadChristmasSpecification implements IsLeadSpecification<Customer>{

    isSatisfiedBy(entity: Customer) {
        if (entity.email && entity.likeChristmas)
            return true;
        return false;
    }
}