import UserWithSpecification from "../../src/user/UserWithSpecification";

test("Não deve criar um usuário com o nome inválido", function () {
    expect(() => new UserWithSpecification("John", "john.doe@email.com")).toThrow("Invalid parameter")
});

test("Não deve criar um usuário com o email inválido", function () {
    expect(() => new UserWithSpecification("John Doe", "john.doe@email")).toThrow("Invalid parameter");
});

test("Deve criar um usuário", function () {
    let user = new UserWithSpecification("John Doe", "john.doe@email.com");
    expect(user.name).toBe("John Doe");
    expect(user.email).toBe("john.doe@email.com");
});