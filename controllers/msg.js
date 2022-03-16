const actionType = {
  join:'JOIN',//加入
  leave:'LEAVE',//离开
  talk:'TALK',//消息
  action:'ACTION',//用户操作
  push:'PUSH'//系统推送
}

const subType = {
  'ChangeName': 1,
}

class Msg {
  constructor(body, type) {
    this.body = body;
    this.type = type;
  }
}

const joinMsg = (body) => {
  return new Msg(body, actionType.join)
}

const talkMsg = (body) => {
  return new Msg(body, actionType.talk)
}

const leaveMsg = (body) => {
  return new Msg(body, actionType.leave)
}

const actionMsg = (body, subType) => {
  if (subType) {
    body.subType = subType;
  }
  return new Msg(body, actionType.action)
}


module.exports = {
  joinMsg,
  talkMsg,
  leaveMsg,
  actionMsg,
  subType
};