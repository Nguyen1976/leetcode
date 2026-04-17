function* fibGenerator(): Generator<number, any, number> {
   let current = 0; 
  let next = 1;

  while (true) {
    yield current; //tạm dừng hàm và trả giá trị ra ngoài
    // easier way to swap elements
    [current, next] = [next, current + next];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */