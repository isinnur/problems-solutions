var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = mergedArray.length;
  if (mergedArray.length % 2 == 0) {
    const mid1 = mergedArray[n / 2 - 1];
    const mid2 = mergedArray[n / 2];
    return (mid1 + mid2) / 2;
  } else {
    return mergedArray[Math.floor(n / 2)];
  }
};
