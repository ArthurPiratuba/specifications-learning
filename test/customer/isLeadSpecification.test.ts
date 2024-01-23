import Customer, { IsLeadSpecification } from "../../src/customer/Customer";

test("Deve passar na validação de lead com nome e email", function () {
    let customer = new Customer("1", "Pedro");
    customer.email = "pedro@email.com";
    let isLeadSpecification = new IsLeadSpecification();
    let isLead = isLeadSpecification.isSatisfiedBy(customer);
    expect(isLead).toBe(true);
});

test("Deve passar na validação de lead com nome e telefone", function () {
    let customer = new Customer("1", "Pedro");
    customer.phoneNumber = "00000000";
    let isLeadSpecification = new IsLeadSpecification();
    let isLead = isLeadSpecification.isSatisfiedBy(customer);
    expect(isLead).toBe(true);
});

test("Deve passar na validação de lead com nome, email e telefone", function () {
    let customer = new Customer("1", "Pedro");
    customer.phoneNumber = "00000000";
    customer.email = "pedro@email.com";
    let isLeadSpecification = new IsLeadSpecification();
    let isLead = isLeadSpecification.isSatisfiedBy(customer);
    expect(isLead).toBe(true);
});

test("Não deve passar na validação de lead apenas com nome", function () {
    let customer = new Customer("1", "Pedro");
    let isLeadSpecification = new IsLeadSpecification();
    let isLead = isLeadSpecification.isSatisfiedBy(customer);
    expect(isLead).toBe(false);
});