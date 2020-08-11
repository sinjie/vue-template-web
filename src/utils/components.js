/**
 * 通用组件方法
 * 
 */

import {MessageBox} from 'element-ui'

export const confirm = (message, type = null, title = '提示', opt) => {
  let option = {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    cancelButtonClass: 'message-box-cancel',
    confirmButtonClass: 'message-box-success',
    type: type,
    center: true
  }
  if (opt && typeof opt === 'object') {
    option = Object.assign(option, opt)
  }
  return MessageBox.confirm(message, title, option)
}
