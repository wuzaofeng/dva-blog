import moment from 'moment'

/**
 * 格式化时间
 * @param date
 * @param format
 * @returns {string}
 */
export const formatDate = (date = '', format="YYYY-MM-DD HH:mm") => {
  return moment(date).format(format)
}
