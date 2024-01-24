import { UserEmailSpecification, UserNameSpecification } from "./UserSpecification";

export default class UserWithSpecification {

    constructor(readonly name: string, readonly email: string) {
        const nameSpecification = new UserNameSpecification();
        const emailSpecification = new UserEmailSpecification();
        if (!nameSpecification.and(emailSpecification).isSatisfiedBy(this))
            throw new Error("Invalid parameter");
    }
}