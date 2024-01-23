import Customer from "../../src/customer/Customer";
import IsLeadChristmasSpecification from "../../src/customer/IsLeadChristmasSpecification";

test("Deve passar na validação de de natal", function () {
    let customer = new Customer("1", "Pedro");
    customer.email = "pedro@email.com";
    customer.likeChristmas = true;
    let isLeadSpecification = new IsLeadChristmasSpecification();
    let isLead = isLeadSpecification.isSatisfiedBy(customer);
    expect(isLead).toBe(true);
});