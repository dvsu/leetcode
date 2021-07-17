package main

import (
	"fmt"
	"strings"
)

func reverseString(str string) string {
	arr := strings.Split(str, "")
	for x, y := 0, len(arr)-1; x < y; x, y = x+1, y-1 {
		arr[x], arr[y] = arr[y], arr[x]
	}
	return strings.Join(arr, "")
}

func romanToInt(s string) int {
	symbolMap := map[string][2]int{
		"I": {0, 1},
		"V": {1, 5},
		"X": {2, 10},
		"L": {3, 50},
		"C": {4, 100},
		"D": {5, 500},
		"M": {6, 1000},
	}
	position := 0
	value := 0
	for _, symbol := range reverseString(s) {
		ss := string(symbol)
		if symbolMap[ss][0] < position {

			value -= symbolMap[ss][1]
		} else {
			value += symbolMap[ss][1]
			position = symbolMap[ss][0]
		}
	}
	return value
}

func main() {
	fmt.Println(romanToInt("III"))     // 3
	fmt.Println(romanToInt("LVIII"))   // 58
	fmt.Println(romanToInt("MCMXCIV")) // 1994
}
