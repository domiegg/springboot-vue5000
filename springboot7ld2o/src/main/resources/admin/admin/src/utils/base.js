const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot7ld2o/",
            name: "springboot7ld2o",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "医患档案管理系统"
        } 
    }
}
export default base
