import moment from 'moment'
import {message} from "antd";

/**
 * 格式化时间
 * @param date
 * @param format
 * @returns {string}
 */
export const formatDate = (date = '', format="YYYY-MM-DD HH:mm") => {
  return moment(date).format(format)
}

export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export const beforeUpload = (file) => {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}
