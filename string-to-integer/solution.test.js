const { solution } = require("./solution");

test("Test positive", () => {
  expect(solution("123")).toBe(123);
});

test("Test negative", () => {
  expect(solution("-321")).toBe(-321);
});

test("Test positive with sign", () => {
  expect(solution("+11")).toBe(11);
});

test("Test leading zero", () => {
  expect(solution("003121")).toBe(3121);
});

test("Test trailing white spaces", () => {
  expect(solution("      -22   ")).toBe(-22);
});

test("Test empty string", () => {
  expect(solution("")).toBe(0);
});

test("Test white spaces", () => {
  expect(solution("            ")).toBe(0);
});

test("Test negative with ending string", () => {
  expect(solution("-135aa")).toBe(-135);
});

test("Test alphanumeric, leading number", () => {
  expect(solution("100 and hundred")).toBe(100);
});

test("Test alphanumeric with multi spaces", () => {
  expect(solution("100 and br o k e n word")).toBe(100);
});

test("Test alphanumeric, leading string", () => {
  expect(solution("hundred and 100")).toBe(0);
});

test("Test string float", () => {
  expect(solution("5.55")).toBe(5);
});

test("Test string float, no leading number", () => {
  expect(solution(".66")).toBe(0);
});

test("Test mixed sign, positive negative", () => {
  expect(solution("+-77")).toBe(0);
});

test("Test mixed sign, negative positive", () => {
  expect(solution("-+88")).toBe(0);
});

test("Large positive number", () => {
  expect(solution("123456789012345")).toBe(Math.pow(2, 31) - 1);
});

test("Large negative number", () => {
  expect(solution("-123456789012345")).toBe(Math.pow(-2, 31));
});
