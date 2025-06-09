/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = []
  const isEmpty = () => stack.length === 0
  const top = () => stack[stack.length - 1]
  for (let i = 0; i < asteroids.length; i++) {
    if (isEmpty() || top() < 0 || asteroids[i] > 0) {
      //trường hợp sẽ k va chạm
      stack.push(asteroids[i])
    } else if (asteroids[i] == -top()) {
      //trường hợp cả 2 phá hủy
      stack.pop()
    } else if (-asteroids[i] > top()) {
      //trường hợp top bị phá hủy thì i-- đễ giữ vị trí
      stack.pop()
      i--
    } //trường hợp top > hơn thì asteroid bị phá hủy
  }

  return stack
}
console.log(
  '🚀 ~ 735-asteroid-collision.js:23 ~ asteroidCollision:',
  asteroidCollision([10, 2, -5])
)

//asteroids là mảng các hành tính
//là kích cỡ và hướng của các hành tính
//nếu cùng hướng thì sẽ k bao giờ gặp nhau
//nếu khác hướng thì có 2 trường hợp là chúng đang bay về phía nhau hay đang bay xa nhau
//nếu bên trái dương và phải âm thì chúng sẽ và chạm và cái nào nhỏ hơn sẽ phát nổ nếu cùng kích cỡ cả 2 phát nổ
//còn ngược lại là chúng bay xa hay

//Chúng ta có thể tưởng tượng 1 cái trục 1D nằm ngang
//-------  ht dương ->>>     -----|------    <<<<- ht âm -----
//=> Như này thì chúng sẽ va chạm
