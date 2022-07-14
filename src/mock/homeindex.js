//mock.js
let Mock = require("mockjs")
let dayjs = require("dayjs")
//栏截aa
let arr = [
    {
        date: "2016-05-02",
        name: "王小二",
        address: "上海市普陀区金沙江路 1518 弄",
    },
    {
        date: "2016-05-04",
        name: "封小二",
        address: "上海市普陀区金沙江路 1517 弄",
    },
    {
        date: "2016-05-01",
        name: "王虎",
        address: "上海市普陀区金沙江路 1519 弄",
    },
    {
        date: "2016-05-03",
        name: "郑坦克",
        address: "上海市普陀区金沙江路 1516 弄",
    }
]

// })//第三个参数就是数据
// Mock.mock(/\/api\/aa/,"get",(options)=>{
//     console.log("aa",options);
//     return arr
// })//第三个参数就是数据

//请求
Mock.mock("/api/all", "get", (options) => {
    console.log("ab", options);
    return {
        status: "200",
        message: "success",
        tableData: arr
    }
})//第三个参数就是数据

//增加
Mock.mock("/api/add", "post", (options) => {
    console.log("ab", options);
    let body = JSON.parse(options.body)
    body.date = dayjs(new Date(body.date)).format("YYYY-MM-DD")
    console.log(body);
    arr.push(body)
    // let { date, name, address } = body
    return {
        status: "200",
        message: "success",
        data: arr
    }
})//第三个参数就是数据

//删除
Mock.mock(/\/api\/delete\?index=\d/, "delete", (options) => {
    console.log("ab", options);
    let url = options.url
    let index = url.split("=")[1]
    console.log(index);
    let newarr = arr.splice(index, 1)
    console.log(arr);
    return {
        status: "200",
        message: "删除成功",
        data: arr
    }
})//第三个参数就是数据

//修改
Mock.mock("/api/update", "put", (options) => {
    console.log("ab", options);
    let body = JSON.parse(options.body)
    console.log(body);
    let { date, name, address, index } = body
    arr[index].date = date
    arr[index].name = name
    arr[index].address = address
    return {
        status: "200",
        message: "success",
        data: arr
    }
})//第三个参数就是数据