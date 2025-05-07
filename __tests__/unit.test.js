// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2

// Testing isPhoneNumber
test("Expect (333) 333-3333 to be a valid phone number", () => {
  expect(isPhoneNumber("(333) 333-3333")).toBe(true);
});
test("Expect (111) 111-1111 to be a valid phone number", () => {
  expect(isPhoneNumber("(111) 111-1111")).toBe(true);
});
test("Expect 1111111111 to NOT be a valid phone number", () => {
  expect(isPhoneNumber("1111111111")).toBe(false);
});
test("Expect (333) (333)-(3333) to NOT be a valid phone number", () => {
  expect(isPhoneNumber("(333) (333)-(3333)")).toBe(false);
});

//Testing isEmail
test("Expect google@gmail.com to be a valid email", () => {
  expect(isEmail("google@gmail.com")).toBe(true);
});
test("Expect yahoo@outlook.com to be a valid email", () => {
  expect(isEmail("yahoo132@outlook.com")).toBe(true);
});
test("Expect googlegmail.com to NOT be a valid email", () => {
  expect(isEmail("googlegmail.com")).toBe(false);
});
test("Expect yahoo@outlook.coms to NOT be a valid email", () => {
  expect(isEmail("yahoo@outlook.coms")).toBe(false);
});

// Testing isStrongPassword
test("Expect thomaspowell110 to be a strong password", () => {
  expect(isStrongPassword("thomaspowell110")).toBe(true);
});
test("Expect woaaaaaaa to be a strong password", () => {
  expect(isStrongPassword("woaaaaaaa")).toBe(true);
});
test("Expect no to NOT be a strong password", () => {
  expect(isStrongPassword("no")).toBe(false);
});
test("Expect blahblahblahblah to NOT be a strong password", () => {
  expect(isStrongPassword("blahblahblahblah")).toBe(false);
});
