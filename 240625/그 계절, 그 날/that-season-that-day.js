const fs = require('fs');
let [year, month, date] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function isLeap(year) {
    if(year % 4 == 0) return true;

    if(year % 4 == 0 && year % 100 == 0) return false;

    if(year % 4 == 0 && (year % 100 == 0 || year % 400 == 0)) return true;

    return false;
}

function isExistDate(year, month, date) {
    switch (month) {
        case 1:
            if(1<= date && date <= 31)
                return true;
            break;
        case 2:
            if(isLeap(year)) {
                if(1<= date && date <= 29)
                    return true;
            }
            else {
                if(1<= date && date <= 28)
                    return true;
            }
            break;
        case 3:
            if(1<= date && date <= 31)
                return true;
            break;
        case 4:
            if(1<= date && date <= 30)
                return true;
            break;
        case 5:
            if(1<= date && date <= 31)
                return true;
            break;
        case 6:
            if(1<= date && date <= 30)
                return true;
            break;
        case 7:
            if(1<= date && date <= 31)
                return true;
            break;
        case 8:
            if(1<= date && date <= 31)
                return true;
            break;
        case 9:
            if(1<= date && date <= 30)
                return true;
            break;
        case 10:
            if(1<= date && date <= 31)
                return true;
            break;
        case 11:
            if(1<= date && date <= 30)
                return true;
            break;
        case 12:
            if(1<= date && date <= 31)
                return true;
            break;
        default:
            return false;
    }

    return false;
}

function printSeason(month) {
    if(month == 1 || month == 2 || month == 12)
        console.log('Winter');
    else if(month == 3 || month == 4 || month == 5)
        console.log('Spring');
    else if(month == 6 || month == 7 || month == 8)
        console.log('Summer');
    else
        console.log('Fall');
}

if(isExistDate(year,month,date))
    printSeason(month);
else
    console.log(-1);