export class DateUtils {

  static getFirstDateOfMonth = function(date) {
    return new Date((new Date(date)).setDate(1));
  };
  
  static getLastDateOfMonth = function(date) {
    return DateUtils.addDays(DateUtils.addMonths(DateUtils.getFirstDateOfMonth(date), 1), -1);
  };
  
  static addDays = function(date, days){
    let rDate = new Date(date);
    return new Date(rDate.setDate( rDate.getDate() + Number(days) )) ;
  };
  
  static addMonths = function(date, month){
    let rDate = new Date(date);
    return new Date(rDate.setMonth( rDate.getMonth() + Number(month) ));
  };
  
  static getFirstDateOfCalendar = function(date) {
    return DateUtils.addDays(DateUtils.getFirstDateOfMonth(date), -DateUtils.getFirstDateOfMonth(date).getDay());
  };
  
  static getLastDateOfCalendar = function(date) {
    return DateUtils.addDays(DateUtils.getLastDateOfMonth(date), 6 - DateUtils.getLastDateOfMonth(date).getDay() );
  };
  
  static countDaysBetween = function(date1, date2) {
    return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
  };

  static getCalendarArray = (date, cnt) => {
    const arr = [];
    for(var i=0, j = -1 ; i<cnt ; i++){
      if(i%7 === 0){
          arr[++j] = [];
      }
      arr[j].push(DateUtils.addDays(date, i));
    }
    return arr;
}

}


