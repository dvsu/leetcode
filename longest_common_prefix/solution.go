package main

import (
	"fmt"
	"strings"
)

func longestCommonPrefix(strs []string) string {
	result := ""
	for i, ch := range strings.Split(strs[0], "") {
		for _, word := range strs {
			if len(word) > i {
				if string(word[i]) != ch {
					return result
				}
			} else {
				return result
			}
		}
		result += ch
	}
	return result
}

func main() {
	fmt.Println(longestCommonPrefix([]string{"flower", "flow", "flight"})) // "fl"
	fmt.Println(longestCommonPrefix([]string{"dog", "racecar", "car"}))    // ""
}
