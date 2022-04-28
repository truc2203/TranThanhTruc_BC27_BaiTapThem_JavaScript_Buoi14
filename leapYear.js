



function leapYear()
{
    var month2 = +document.getElementById("month2").value 
    var year2 = +document.getElementById("year2").value

    var day 

    var dayOfMonth = document.getElementById("dayOfMonth")
    var dayOfMonth2 = document.getElementById("dayOfMonth2")

    if(month2 === 4 || month2 === 6 || month2 === 9 || month2 === 11)
    {
        day = 30
        dayOfMonth.innerHTML = ` Số ngày trong tháng : ${day}`
        dayOfMonth2.innerHTML = ` Số ngày trong tháng ( Nhuận ) : ${day}`
    }
    else if(month2 === 2)
    {
        if(year2 % 4 === 0)
        {
            day = 28
            dayOfMonth.innerHTML = ` Số ngày trong tháng : ${day}`
            dayOfMonth2.innerHTML = ` Số ngày trong tháng ( Nhuận ) : ${day += 1}`
        }
        else
        {
            day = 28
            dayOfMonth.innerHTML = ` Số ngày trong tháng : ${day}`
            dayOfMonth2.innerHTML = ` Số ngày trong tháng ( Nhuận ) : ${day}`
        }
    }
    else{
        day = 31
        dayOfMonth.innerHTML = ` Số ngày trong tháng : ${day}`
        dayOfMonth2.innerHTML = ` Số ngày trong tháng ( Nhuận ) : ${day}`
    }
}