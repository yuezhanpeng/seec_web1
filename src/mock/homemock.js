let Mock = require("mockjs")
// /aa 拦截
let arr = ["zhangsan", "lisi", "wangwu", "zhaoliu"]
// /api/aa
// Mock.mock("/api/aa", "get", (options) => {
//     console.log(options);
//     return arr
// })
// 正则 /api/aa
Mock.mock(/\/api\/aa/, "get", (options) => {
    console.log(options);
    return arr
})
Mock.mock("/api/ab", "post", (options) => {
    console.log(options);
    return {
        status: 200,
        message: "success",
        data: arr
    }
})

require("./aboutmock")
require("./aboutmock")