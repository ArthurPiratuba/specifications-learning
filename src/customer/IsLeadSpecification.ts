import { Entity, Specification } from "./Customer";

export default interface IsLeadSpecification<T extends Entity> extends Specification<T> { }