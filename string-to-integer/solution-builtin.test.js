const { solutionBuiltin } = require("./solution-builtin");

test("Test positive", () => {
  expect(solutionBuiltin("123")).toBe(123);
});

test("Test negative", () => {
  expect(solutionBuiltin("-321")).toBe(-321);
});

test("Test positive with sign", () => {
  expect(solutionBuiltin("+11")).toBe(11);
});

test("Test leading zero", () => {
  expect(solutionBuiltin("003121")).toBe(3121);
});

test("Test trailing white spaces", () => {
  expect(solutionBuiltin("      -22   ")).toBe(-22);
});

test("Test empty string", () => {
  expect(solutionBuiltin("")).toBe(0);
});

test("Test white spaces", () => {
  expect(solutionBuiltin("            ")).toBe(0);
});

test("Test negative with ending string", () => {
  expect(solutionBuiltin("-135aa")).toBe(-135);
});

test("Test alphanumeric, leading number", () => {
  expect(solutionBuiltin("100 and hundred")).toBe(100);
});

test("Test alphanumeric with multi spaces", () => {
  expect(solutionBuiltin("100 and br o k e n word")).toBe(100);
});

test("Test alphanumeric, leading string", () => {
  expect(solutionBuiltin("hundred and 100")).toBe(0);
});

test("Test string float", () => {
  expect(solutionBuiltin("5.55")).toBe(5);
});

test("Test string float, no leading number", () => {
  expect(solutionBuiltin(".66")).toBe(0);
});

test("Test mixed sign, positive negative", () => {
  expect(solutionBuiltin("+-77")).toBe(0);
});

test("Test mixed sign, negative positive", () => {
  expect(solutionBuiltin("-+88")).toBe(0);
});

test("Large positive number", () => {
  expect(solutionBuiltin("123456789012345")).toBe(Math.pow(2, 31) - 1);
});

test("Large negative number", () => {
  expect(solutionBuiltin("-123456789012345")).toBe(Math.pow(-2, 31));
});
