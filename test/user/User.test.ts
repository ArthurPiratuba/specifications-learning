import User from "../../src/user/User";

test("Não deve criar um usuário com o nome inválido", function () {
    expect(() => new User("John", "john.doe@email.com")).toThrow("Invalid parameter")
});

test("Não deve criar um usuário com o email inválido", function () {
    expect(() => new User("John Doe", "john.doe@email")).toThrow("Invalid parameter");
});

test("Deve criar um usuário", function(){
    let user = new User("John Doe", "john.doe@email.com");
    expect(user.name).toBe("John Doe");
    expect(user.email).toBe("john.doe@email.com");
});