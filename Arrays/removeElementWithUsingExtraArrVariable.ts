export const removeElement = (nums: Array<number>, val: number) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[j] = nums[i];
      j++;
    }
  }
  let k = nums.slice(0, j);
  nums = k;
  return j;
};
