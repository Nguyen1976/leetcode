function angleClock(hour: number, minutes: number): number {
    return (Math.abs(minutes - ((hour % 12) * 5 + 5 / (60 / minutes))) * 360 / 60) > 180 ? 360 - (Math.abs(minutes - ((hour % 12) * 5 + 5 / (60 / minutes))) * 360 / 60) : (Math.abs(minutes - ((hour % 12) * 5 + 5 / (60 / minutes))) * 360 / 60)
};

/**
ta hiểu đồng hồ sẽ có 360 độ tương đương với 60 phút
cần xác định vị trí kim phút các vị trí kim giờ
ví dụ 12h30 tức kím giờ chỉ ở chỗ 5' đầu rồi chia đôi sẽ ra vị trí

xác định 0 giờ hay 12 giờ là như nhay
ví dụ 12h sẽ đổi hết thành 0h để xác định vị trí kimgiowf ở phút bao nhiêu
giả dụ 12h sẽ là ở phút só 0 1 giờ ở phút số 5
cộng thêm với 60 chia cho số phút thì sẽ ra được vị trí chính xác số phút của kim giờ
 */