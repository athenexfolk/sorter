# Selection Sort

## Description

Selection Sort is an in-place, comparison-based sorting algorithm. It works by dividing the list into two parts: a sorted part and an unsorted part. Initially, the sorted part is empty, and the unsorted part contains all the elements. The algorithm repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted part and swaps it with the first unsorted element, expanding the sorted part one element at a time.

## Time Complexity

- **Best Case:** O(n²) – The algorithm always performs the same number of comparisons regardless of the initial order of the elements.
- **Average Case:** O(n²) – The number of comparisons remains quadratic, regardless of the input order.
- **Worst Case:** O(n²) – The number of comparisons is the same as in the average case, regardless of whether the list is sorted or not.

## Space Complexity

- **O(1)** – Selection Sort is an in-place sorting algorithm, so it requires a constant amount of extra space for swapping elements.

## Pros & Cons

### Pros

- Simple to understand and implement.
- In-place sorting, requiring no additional memory.
- Performs well for small datasets.

### Cons

- Inefficient for large datasets due to its O(n²) time complexity.
- Not stable: Equal elements may be reordered.
- Requires more swaps than other algorithms like bubble sort.
