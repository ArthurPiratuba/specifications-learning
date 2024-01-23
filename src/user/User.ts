export default class User {

    constructor(readonly name: string, readonly email: string) {
        if (name.split(" ").length < 2) throw new Error("Invalid parameter");
        if (!String(email).toLowerCase().match(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/)) throw new Error("Invalid parameter");
    }
}