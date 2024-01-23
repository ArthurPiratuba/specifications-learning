import UserEmailSpecification from "../specification/UserEmailSpecification";
import UserNameSpecification from "../specification/UserNameSpecification";

export default class User {

    constructor(readonly name: string, readonly email: string) {
        //if (name.split(" ").length < 2) throw new Error("Invalid parameter");
        //if (!String(email).toLowerCase().match(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/)) throw new Error("Invalid parameter");
        const nameSpecification = new UserNameSpecification();
        const emailSpecification = new UserEmailSpecification();

        if (!
            nameSpecification
                .and(emailSpecification)
                .isSatisfiedBy(this)
        ) throw new Error("Invalid parameter");
    }
}