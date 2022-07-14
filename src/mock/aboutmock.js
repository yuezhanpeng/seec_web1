let Mock = require("mockjs")
// /aa 拦截
let arr = ["1111", "22222", "333333", "zhaoliu"]
// /api/aa
// Mock.mock("/api/aa", "get", (options) => {
//     console.log(options);
//     return arr
// })
// 正则 /api/aa
Mock.mock(/\/api\/asa/, "get", (options) => {
    console.log(options);
    return arr
})
Mock.mock("/api/aeb", "post", (options) => {
    console.log(options);
    return {
        status: 200,
        message: "success",
        data: arr
    }
})