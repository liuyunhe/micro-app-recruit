module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html"
    },
    childHome: { // 微应用——首页
      entry: "src/mains/home/main.js",
      template: "public/home.html"
    },
    childJob: { // 微应用——找工作
      entry: "src/mains/job/main.js",
      template: "public/job.html"
    },
    childEnterprise: { // 微应用——找企业
      entry: "src/mains/enterprise/main.js",
      template: "public/enterprise.html"
    },
    childAbout: { // 微应用——关于我们
      entry: "src/mains/about/main.js",
      template: "public/about.html"
    },
  }
}