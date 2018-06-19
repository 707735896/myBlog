// 获取状态信息
const getters = {
  username: state => state.login.username,
  role: state => state.login.role,
  // newrouter: state => state.login.newrouter,
  count: (state) => state.count += 100
}
export default getters
