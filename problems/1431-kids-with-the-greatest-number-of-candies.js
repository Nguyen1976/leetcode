/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies)

  return (result = candies.map((candy) =>
    candy + extraCandies >= max ? true : false
  ))
}
