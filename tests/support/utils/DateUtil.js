const moment = require('moment');

class DateUtil {

    getMilliseconds(){
        const date = new Date();
        let ms = date.getMilliseconds()
        return ms
    }

    getDayBeforeDate(fark){
        const date = new Date();
        date.setDate(date.getDate() - fark); // Day before today's date
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months start from 0, so we add 1
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    getDayBeforeDateAndHour(fark){
        const date = new Date();
        date.setDate(date.getDate() - fark); // Day before today's date
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months start from 0, so we add 1
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    getTodayDate(){
        const date = new Date()
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar, bu yüzden +1 ekliyoruz.
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }
    
    getTomorrowDate(){
        const date = new Date();
        date.setDate(date.getDate() + 1); // Tomorrow's date
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }
        

    getPresentTime(){
        const date = new Date()
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

}

module.exports = new DateUtil();
