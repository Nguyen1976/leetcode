/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let queueR = [],
    queueD = []
  let n = senate.length
  for (let i = 0; i < n; i++) {
    senate[i] === 'R' ? queueR.push(i) : queueD.push(i)
  }

  while (queueR.length > 0 && queueD.length > 0) {
    if (queueR[0] > queueD[0]) {
      //D thắng
      queueD.push(queueD[0] + n)
      queueD.shift()
      queueR.shift()
    } else {
      queueR.push(queueR[0] + n)
      queueD.shift()
      queueR.shift()
    }
  }

  return queueR.length === 0 ? 'Dire' : 'Radiant'
}

//Ý tưởng có 2 hàng đợi R và D lưu chỉ số của các R và D trong 2 hàng đợi
//sau đó sẽ lần lượt lấy ra để so sánh
//ai có index nhỏ hơn sẽ thắng và push vào queue index+n(ví dụ ông 0 vừa thắng thì phải là 0+n)
//Queue nào hết trước thì sẽ thua vì bản chất queue sẽ lưu những giá trị còn hoạt động được và những giá trị bị cấm sẽ bị loại bỏ

//dùng shift và push
