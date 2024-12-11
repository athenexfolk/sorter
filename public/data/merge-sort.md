# Merge Sort

## Description

Merge Sort is a divide-and-conquer algorithm that splits the array into two halves, sorts each half recursively, and then merges the sorted halves back together. The merging step ensures that the final array is sorted. Merge Sort is known for its efficiency and guaranteed O(n log n) time complexity, making it suitable for larger datasets.

## Time Complexity

- **Best Case:** O(n log n) – Even if the list is already sorted, the algorithm still divides and merges the array recursively.
- **Average Case:** O(n log n) – The list is recursively split and merged in each division.
- **Worst Case:** O(n log n) – The algorithm always splits the array and performs the merging step, regardless of the initial order.

## Space Complexity

- **O(n)** – Merge Sort requires extra space proportional to the size of the input array to store the merged arrays.

## Pros & Cons

### Pros

- Time complexity of O(n log n) in all cases, making it very efficient for large datasets.
- Stable: maintains the relative order of equal elements.
- Suitable for external sorting (sorting large files that don't fit in memory).

### Cons

- Requires O(n) additional space for the temporary arrays used during the merge process.
- Slower than algorithms like quicksort for small datasets due to the overhead of recursive calls and merging.
