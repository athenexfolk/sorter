# Bubble Sort

## Description

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. It's called "Bubble Sort" because smaller elements bubble to the top of the list with each iteration.

## Time Complexity

- **Best Case:** O(n) – This occurs when the list is already sorted, and only one pass is needed with no swaps.
- **Average Case:** O(n²) – This happens when the elements are in a random order, requiring multiple passes and comparisons.
- **Worst Case:** O(n²) – This occurs when the list is sorted in reverse order, resulting in the maximum number of comparisons and swaps.

## Space Complexity

- **O(1)** – Bubble Sort is an in-place sorting algorithm, meaning it only requires a constant amount of extra space, aside from the input array.

## Pros & Cons

### Pros

- Simple to implement and understand.
- In-place sorting, so it doesn't require extra memory.
- Stable: maintains the relative order of elements with equal values.

### Cons

- Inefficient for large datasets due to its O(n²) time complexity.
- Comparisons are made repeatedly even if the list is already partially sorted, which makes it less efficient than other algorithms like quicksort or mergesort.
