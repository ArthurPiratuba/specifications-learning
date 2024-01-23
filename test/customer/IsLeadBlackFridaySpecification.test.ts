import Customer  from "../../src/customer/Customer";
import { IsLeadBlackFridaySpecification } from "../../src/customer/IsLeadBlackFridaySpecification";

test("Deve passar na validação de lead com nome e email", function () {
    let customer = new Customer("1", "Pedro");
    customer.email = "pedro@email.com";
    let isLeadSpecification = new IsLeadBlackFridaySpecification();
    let isLead = isLeadSpecification.isSatisfiedBy(customer);
    expect(isLead).toBe(true);
});

test("Deve passar na validação de lead com nome e telefone", function () {
    let customer = new Customer("1", "Pedro");
    customer.phoneNumber = "00000000";
    let isLeadSpecification = new IsLeadBlackFridaySpecification();
    let isLead = isLeadSpecification.isSatisfiedBy(customer);
    expect(isLead).toBe(true);
});

test("Deve passar na validação de lead com nome, email e telefone", function () {
    let customer = new Customer("1", "Pedro");
    customer.phoneNumber = "00000000";
    customer.email = "pedro@email.com";
    let isLeadSpecification = new IsLeadBlackFridaySpecification();
    let isLead = isLeadSpecification.isSatisfiedBy(customer);
    expect(isLead).toBe(true);
});

test("Não deve passar na validação de lead apenas com nome", function () {
    let customer = new Customer("1", "Pedro");
    let isLeadSpecification = new IsLeadBlackFridaySpecification();
    let isLead = isLeadSpecification.isSatisfiedBy(customer);
    expect(isLead).toBe(false);
});