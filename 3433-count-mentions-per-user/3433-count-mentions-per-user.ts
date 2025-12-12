function countMentions(numberOfUsers: number, events: string[][]): number[] {
    let mentions: number[] = new Array(numberOfUsers).fill(0)
    let status = new Map<string, string>(Array(numberOfUsers).fill(0).map((_, i) => ["" + i, "ONLINE"]))

    //phải sort event theo timestamp sau đó là theo OFFLINE lên đầu
    events.sort((a, b) => {
        let t1 = Number(a[1])
        let t2 = Number(b[1])

        if(t1 !== t2) return t1 - t2

        if (a[0] === "OFFLINE" && b[0] === "MESSAGE") return -1;
        if (a[0] === "MESSAGE" && b[0] === "OFFLINE") return 1;

        return 0
    })

    let mentionAll = () => {
        for(let i = 0; i < numberOfUsers; i++) mentions[i] += 1
    }
    let updateTimestamp = (timestamp: number) => {
        //nếu timestamp cũ và mới lệch nhau 60s thì update thành online
        //nếu k thì update timestamp
        for(let [key, val] of status) {
            if(val !== "ONLINE") {
                let diff = timestamp - Number(val.split(' ')[1])
                console.log(key, val)
                if(diff >= 60) {
                    status.set(key, "ONLINE")
                }
            }
        }
    }

    let mentionUserOnline = () => {
        for(let [key, val] of status) {
            if(val === "ONLINE") {
                mentions[Number(key)] += 1
            }
        }
    }

    let updateWithIds = (id: string) => {
        let ids = id.split(' ')
        for(let i = 0; i < ids.length; i++) {
            mentions[Number(ids[i].slice(2))] += 1
        }
    }
    for(let e of events) {
        if(e[0] === "MESSAGE") {
            switch(e[2]) {
                case "ALL":
                    updateTimestamp(Number(e[1]))
                    mentionAll()
                    break
                case "HERE":
                    //update timestamp trước
                    updateTimestamp(Number(e[1]))
                    mentionUserOnline()
                    break
                default://trường hợp ids
                    updateTimestamp(Number(e[1]))
                    updateWithIds(e[2])
                    break
            }
        } else {
            //offline
            status.set(e[2], "OFFLINE " + e[1])
        }
    }
    return mentions
};

/*
Bạn được cho mảng numberOfUsers đại diện cho tổng số người dùng và mảng events size n*3
mỗi events có thể theo 2 trang thái dưới đây

message event:
["MESSAGE", "timestampi", "mentions_stringi"]
mentions_stringi có thể chứa 1 trong những token sau:
id<number>: nằm trong phạm vi 0 -> numberOfUsers - 1
Có nhiều ids riêng biệt phân tách bằng khoảng trắng và có thể chứa id trùng lặp
All: đề cấp đến tất cả user
HERE: đề cập đến tất cả user đang online

offline event:
["OFFLINE", "timestampi", "idi"]
event này chỉ ra rằng  user id đang offline kể từ timestamp trong 60 đơn vị thời gian
user sẽ tự động online tại timestampi + 60.

Trả về một mảng đề cập trong đó đề cập [i] đại diện cho số lần đề cập mà người dùng có id i có trong tất cả các sự kiện MESSAGE
Tất cả người dùng ban đầu đều trực tuyến và nếu người dùng ngoại tuyến hoặc trực tuyến trở lại, thay đổi trạng thái của họ sẽ được xử lý trước khi xử lý bất kỳ sự kiện tin nhắn nào xảy ra ở cùng một dấu thời gian.

giải pháp ban đầu xử lý từng message 

thử sử dụng map dưới dạng như sau
id: status nếu đang off phải có time off

giả dụ có 2 user <=> id0 id1

id0 : ONLINE 
id1: ONLINE

["MESSAGE","10","id1 id0"]
đề cập tới cả 2

check if online + mention
=> mention = [1, 1]


["OFFLINE","11","0"]
id0 : OFFLINE 11 
id1: ONLINE

lúc này id0 offline

["MESSAGE","71","HERE"] lúc này id0 đã online bời vì 11 + 60 = 71 here là tất cả những thằng on
//update time trường hợp này thì sẽ phải lặp qua toàn bộ map check những thằng đang off nếu 


=> [2, 2]




*/