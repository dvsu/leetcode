package main

import (
	"fmt"
	"sort"
)

func getIndex(arr []int, target int, start int) int {
	for i := start; i < len(arr); i++ {
		if arr[i] == target {
			return i
		}
	}
	return -1
}

func twoSum(nums []int, target int) []int {
	nums_sorted := append([]int{}, nums...)
	sort.Ints(nums_sorted)

	cursor_l := 0
	cursor_r := len(nums_sorted) - 1
	count := 0

	for count < 10000 {

		if nums_sorted[cursor_l]+nums_sorted[cursor_r] > target {
			cursor_r -= 1
		} else if nums_sorted[cursor_l]+nums_sorted[cursor_r] < target {
			cursor_l += 1
		} else {
			first_index := getIndex(nums, nums_sorted[cursor_l], 0)
			fmt.Println(nums, nums_sorted, cursor_l, cursor_r)

			if nums_sorted[cursor_l] != nums_sorted[cursor_r] {
				return []int{first_index, getIndex(nums, nums_sorted[cursor_r], 0)}
			} else if first_index == len(nums)-1 {
				return []int{first_index, getIndex(nums, nums_sorted[cursor_r], 0)}
			} else {
				return []int{first_index, getIndex(nums, nums_sorted[cursor_r], first_index+1)}

			}
		}
		count += 1
	}
	return []int{}
}

func main() {
	fmt.Println(twoSum([]int{-1, -2, -3, -4, -5}, -8)) // [4, 2]
	fmt.Println(twoSum([]int{-10, -1, -18, -19}, -19)) // [2, 1]
}
