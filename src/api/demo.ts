import ajax from '@/lib/ajax'

/**
 */
export function getAjax () {
  return ajax({
    api: 'getUrl',
    method: 'get'
  })
}

/**
 */
export function postAjax (data: any) {
  return ajax({
    api: 'postUrl',
    method: 'post',
    data: data
  })
}
