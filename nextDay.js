function nextDay() {
    var day = +document.getElementById("day").value;
    var month = +document.getElementById("month").value;
    var year = +document.getElementById("year").value;

    var nextDays = document.getElementById("nextDays");
    var preDays = document.getElementById("preDays");
    
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day < 30 && day > 1) {
            day += 1;
            nextDays.innerHTML = ` Ngày kế tiếp : ${day} / ${month} / ${year}`;
            preDays.innerHTML = ` Ngày trước đó : ${(day -= 2)} / ${month} / ${year}`;
        } else if (day === 1) {
            nextDays.innerHTML = ` Ngày kế tiếp : ${(day += 1)} / ${month} / ${year}`;
            day = 31;
            month -= 1;
            preDays.innerHTML = ` Ngày trước đó : ${day} / ${month} / ${year}`;
        } else if (day === 30) {
            day = 1;
            month += 1;
            nextDays.innerHTML = ` Ngày kế tiếp : ${day} / ${month} / ${year}`;
            day = 29;
            preDays.innerHTML = ` Ngày trước đó : ${day} / ${(month -= 1)} / ${year}`;
        }
    } else if (month === 2) {
        if (day < 28 && day > 1) {
            day += 1;
            nextDays.innerHTML = ` Ngày kế tiếp : ${day} / ${month} / ${year}`;
            preDays.innerHTML = ` Ngày trước đó : ${(day -= 2)} / ${month} / ${year}`;
        } else if (day === 1) {
            nextDays.innerHTML = ` Ngày kế tiếp : ${(day += 1)} / ${month} / ${year}`;
            day = 31;
            preDays.innerHTML = ` Ngày trước đó : ${day} / ${(month -= 1)} / ${year}`;
        } else if (day === 28) {
            day = 1;
            month += 1;
            nextDays.innerHTML = ` Ngày kế tiếp : ${day} / ${month} / ${year}`;
            day = 27;
            preDays.innerHTML = ` Ngày trước đó : ${day} / ${(month -= 1)} / ${year}`;
        }
    } else {
        if (day < 31 && day > 1) {
            day += 1;
            nextDays.innerHTML = ` Ngày kế tiếp : ${day} / ${month} / ${year}`;
            preDays.innerHTML = ` Ngày trước đó : ${(day -= 2)} / ${month} / ${year}`;
        } else if (day === 1)
            if (month === 1) {
                nextDays.innerHTML = ` Ngày kế tiếp : ${(day += 1)} / ${month} / ${year}`;
                day = 31;
                month = 12;
                year -= 1;
                preDays.innerHTML = ` Ngày trước đó : ${day} / ${month} / ${year}`;
            } else if (month === 3) {
                {
                    nextDays.innerHTML = ` Ngày kế tiếp : ${(day += 1)} / ${month} / ${year}`;
                    day = 28;
                    month -= 1;
                    preDays.innerHTML = ` Ngày trước đó : ${day} / ${month} / ${year}`;
                }
            } else if (month === 8) {
                {
                    nextDays.innerHTML = ` Ngày kế tiếp : ${(day += 1)} / ${month} / ${year}`;
                    day = 31;
                    month -= 1;
                    preDays.innerHTML = ` Ngày trước đó : ${day} / ${month} / ${year}`;
                }
            } else if (month === 12) {
                {
                    nextDays.innerHTML = ` Ngày kế tiếp : ${(day += 1)} / ${month} / ${year}`;
                    day = 30;
                    month -= 1;
                    year -= 1;
                    preDays.innerHTML = ` Ngày trước đó : ${day} / ${month} / ${year}`;
                }
            } else {
                {
                    nextDays.innerHTML = ` Ngày kế tiếp : ${(day += 1)} / ${month} / ${year}`;
                    day = 30;
                    month -= 1;
                    preDays.innerHTML = ` Ngày trước đó : ${day} / ${month} / ${year}`;
                }
            }
        else if (day === 31)
            if (month === 12) {
                day = 1;
                month = 1;
                year += 1;
                nextDays.innerHTML = ` Ngày kế tiếp : ${day} / ${month} / ${year}`;
                day = 30;
                month = 12;
                year -= 1;
                preDays.innerHTML = ` Ngày trước đó : ${day} / ${month} / ${year}`;
            } else {
                day = 1;
                month += 1;
                nextDays.innerHTML = ` Ngày kế tiếp : ${day} / ${month} / ${year}`;
                day = 30;
                month -= 1;
                preDays.innerHTML = ` Ngày trước đó : ${day} / ${month} / ${year}`;
            }
    }
}
