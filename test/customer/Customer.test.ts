import Customer from "../../src/customer/Customer";
import IsChargeableSpecification from "../../src/customer/IsChargeableSpecification";
import { IsLeadBlackFridaySpecification } from "../../src/customer/IsLeadBlackFridaySpecification";
import IsLeadChristmasSpecification from "../../src/customer/IsLeadChristmasSpecification";

test("Deve validar que um cliente está de acordo com a variante black friday da especificação de lead", function () {
    let customer = new Customer("1", "John Doe");
    customer.phoneNumber = "0000000000";
    let isLeadSpecification = new IsLeadBlackFridaySpecification();
    let isLead = customer.isValidLead(isLeadSpecification);
    expect(isLead).toBe(true);
});

test("Deve validar que um cliente está de acordo com a variante natal da especificação de lead", function () {
    let customer = new Customer("1", "John Doe");
    customer.email = "john.doe@email.com";
    customer.likeChristmas = true;
    let isLeadSpecification = new IsLeadChristmasSpecification();
    let isLead = customer.isValidLead(isLeadSpecification);
    expect(isLead).toBe(true);
});