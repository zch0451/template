import {getArgs,sucResponse} from "../lib/util";
const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin',
    avatar: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    token: 'admin',
    avatar: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
  }
}


export const login = req => {
  req = getArgs(req.body)
  return sucResponse({ token: USER_MAP[req.userName].token })
}

export const getUserInfo = req => {
  const params = getArgs(req.url.split('?')[1])
  return sucResponse(USER_MAP[params.token])
}


