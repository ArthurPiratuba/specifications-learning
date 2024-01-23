import Customer, { IsChargeableSpecification } from "../../src/customer/Customer";

test("Deve validar de um cliente é cobrável, precisa de cpf e email", function () {
    let customer = new Customer("1", "John Doe");
    customer.cpf = "000.000.000-00";
    customer.email = "john.doe@email.com";
    let isChargeableSpecification = new IsChargeableSpecification();
    let isChargeable = isChargeableSpecification.isSatisfiedBy(customer);
    expect(isChargeable).toBe(true);
});