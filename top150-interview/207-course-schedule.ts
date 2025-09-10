function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: Map<number, number[]> = new Map()
    for(let i: number = 0; i < numCourses; i++) {//vì số lượng và tên khóa học sẽ theo định dạng ví dụ có 2 khóa thì sẽ là 0 và 1
        graph.set(i, []);
    }

    for(const [a, b] of prerequisites) {
        graph.get(b)!.push(a)
    }


    //ta sẽ tạo các trạng thái với 0 = chưa thăm, 1 đang thăm và 2 là đã thăm
    const state: number[] = new Array(numCourses).fill(0)

    const dfs = (node: number): boolean => {
        if(state[node] === 1) return false
        if(state[node] === 2) return true// đã thăm

        state[node] = 1//đánh dấu là đang thăm
        for(const nei of graph.get(node)!) {//sẽ lặp qua các khóa học được mở khóa 
            if(!dfs(nei)) return false
        }
        state[node] = 2//đã thăm
        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (state[i] === 0) {
            if (!dfs(i)) return false;
        }
    }

    return true
};

//đi theo 2 bước build đồ thị với map và dfs
//map sẽ lưu ở dạng kiểu muốn học được khóa b sẽ là điều kiện tiên quyết cho nhiều khóa học(array)
//với dạng map này chúng ta sẽ hiểu với key là kháo học tiên quyết khi học khóa key rồi thì sẽ được học các khóa value
//bài toán sẽ hiểu theo hướng nếu như có chu trình [[1,0],[0,1]] tức là false có thể hiểu khi đang thăm mà gặp lại 1 node mà cũng đang thăm nó sẽ là lặp vô tận lên sai còn nếu gặp node đã thăm rồi tức là đủ điều kiện học thì sẽ keetss thúc chu trình

//ý tưởng chính: chúng ta như kiểu duyệt từ dưới đi lên tức từ kháo học tiên quyết sang kháo học chính
//hiểu là giống như chuỗi kháo học bắt đầu từ cấc môn nền tảng nhất r đến môn nâng cao
//trong quá trình dfs mà gặp lại đúng môn đang ở trong chuỗi tức là nó tạo thành cycle thì nó sẽ vô hạn và k bao h hoàn thành được hết chuỗi khóa học