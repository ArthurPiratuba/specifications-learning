import User from "./User";

interface Specification<T> {
    isSatisfiedBy(t: T): boolean;
    and(other: Specification<T>): Specification<T>;
}

abstract class AbstractSpecification<T> implements Specification<T>{
    abstract isSatisfiedBy(t: T): boolean;

    and(other: Specification<T>): Specification<T> {
        return new AndSpecification(this, other);
    }
}

class AndSpecification<T> extends AbstractSpecification<T>{
    constructor(private left: Specification<T>, private right: Specification<T>) {
        super();
    }

    isSatisfiedBy(t: T): boolean {
        return this.left.isSatisfiedBy(t) && this.right.isSatisfiedBy(t);
    }
}

export class UserEmailSpecification extends AbstractSpecification<User>{
    isSatisfiedBy(user: User): boolean {
        return !!String(user.email).toLowerCase().match(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/);
    }
}

export class UserNameSpecification extends AbstractSpecification<User>{
    isSatisfiedBy(user: User): boolean {
        return user.name.split(" ").length >= 2;
    }
}