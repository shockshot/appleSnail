export default class StringUtils {
  static toPhoneNo = (str = '') => str.replace(/([0-9]{3})([0-9]{3,4})([0-9]{4})/, '$1-$2-$3')

  static toBirthDate = (str = '') => str.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, '$1/$2/$3')
}