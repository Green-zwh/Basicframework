let baseUrl = "";
let env = process.env.VUE_APP_TITLE === 'alpha' ? 'alpha' : 'production';

switch (env) {
  case 'production':
    baseUrl = "http://localhost:4000"
    alert("开发环境");
    break;
  case 'alpha':
    // baseUrl = "https://dcms.zast.org.cn/zj_api"
    alert("生产环境");
    break;
}
export default baseUrl;
