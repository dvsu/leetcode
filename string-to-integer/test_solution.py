import pytest
from solution import Solution

solution = Solution()


def test_positive():
    assert solution.myAtoi("123") == 123


def test_negative():
    assert solution.myAtoi("-321") == -321


def test_positive_with_sign():
    assert solution.myAtoi("+11") == 11


def test_leading_zero():
    assert solution.myAtoi("003121") == 3121


def test_trailing_white_spaces():
    assert solution.myAtoi("      -22   ") == -22


def test_empty_string():
    assert solution.myAtoi("") == 0


def test_white_spaces():
    assert solution.myAtoi("            ") == 0


def test_negative_with_ending_string():
    assert solution.myAtoi("-135aa") == -135


def test_alphanumeric_leading_number():
    assert solution.myAtoi("100 and hundred") == 100


def test_alphanumeric_with_multi_spaces():
    assert solution.myAtoi("100 and br o k e n word") == 100


def test_alphanumeric_leading_string():
    assert solution.myAtoi("hundred and 100") == 0


def test_string_float():
    assert solution.myAtoi("5.55") == 5


def test_string_float_no_leading_number():
    assert solution.myAtoi(".66") == 0


def test_mixed_sign_pos_neg():
    assert solution.myAtoi("+-77") == 0


def test_mixed_sign_neg_pos():
    assert solution.myAtoi("-+88") == 0
