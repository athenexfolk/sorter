# Insertion Sort

## Description

Insertion Sort is a simple sorting algorithm that builds the sorted array one item at a time. It assumes that the first element is already sorted and then iteratively picks the next element from the unsorted portion of the array, placing it in the correct position within the sorted portion. This process is repeated until the entire array is sorted.

## Time Complexity

- **Best Case:** O(n) – This occurs when the list is already sorted, and no shifting is required.
- **Average Case:** O(n²) – In this case, elements are randomly ordered, and each element may need to be compared with most others.
- **Worst Case:** O(n²) – This occurs when the list is sorted in reverse order, requiring the maximum number of comparisons and shifts.

## Space Complexity

- **O(1)** – Insertion Sort is an in-place sorting algorithm, so it does not require additional memory aside from the input array.

## Pros & Cons

### Pros

- Simple to implement and understand.
- Efficient for small datasets or nearly sorted data.
- Stable: maintains the relative order of equal elements.

### Cons

- Inefficient for large datasets with a time complexity of O(n²).
- Requires shifting of elements, which can be costly for large arrays.
