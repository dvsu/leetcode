package main

import (
	"fmt"
	"math"
	"strconv"
	"strings"
)

func integerSign(x int) int {
	if x < 0 {
		return -1
	} else {
		return 1
	}
}

func Abs(x int) int {
	if x < 0 {
		return -x
	} else {
		return x
	}
}

func reverseString(str string) string {
	arr := strings.Split(str, "")
	for x, y := 0, len(arr)-1; x < y; x, y = x+1, y-1 {
		arr[x], arr[y] = arr[y], arr[x]
	}
	return strings.Join(arr, "")
}

func reverse(x int) int {
	sign := integerSign(x)
	intVal, _ := strconv.Atoi(reverseString(strconv.Itoa(Abs(x))))
	result := intVal * sign
	if (result > int(math.Pow(2, 31)-1)) || (result < int(math.Pow(2, 31)*-1)) || (result == 0) {
		return 0
	} else {
		return result
	}
}

func main() {
	fmt.Println(reverse(120))        // 21
	fmt.Println(reverse(123))        // 321
	fmt.Println(reverse(-123))       // -321
	fmt.Println(reverse(0))          // 0
	fmt.Println(reverse(1534236469)) // 0
}
