function farFromSchool()
{
    var studentName1 = document.getElementById("studentName1").value 
    var studentName2 = document.getElementById("studentName2").value 
    var studentName3 = document.getElementById("studentName3").value 

    var studentX1 = +document.getElementById("studentX1").value 
    var studentX2 = +document.getElementById("studentX2").value 
    var studentX3 = +document.getElementById("studentX3").value 

    var studentY1 = +document.getElementById("studentY1").value 
    var studentY2 = +document.getElementById("studentY2").value 
    var studentY3 = +document.getElementById("studentY3").value 

    var schoolX = +document.getElementById("schoolX").value 
    var schoolY = +document.getElementById("schoolY").value 

    var result4 = document.getElementById("result4")

    var coorStudent1 = Math.sqrt(((schoolX - studentX1)*(schoolX - studentX1)) + ((schoolY - studentY1)*(schoolY - studentY1)))  
    var coorStudent2 = Math.sqrt(((schoolX - studentX2)*(schoolX - studentX2)) + ((schoolY - studentY2)*(schoolY - studentY2)))  
    var coorStudent3 = Math.sqrt(((schoolX - studentX3)*(schoolX - studentX3)) + ((schoolY - studentY3)*(schoolY - studentY3)))  

    console.log(coorStudent1)
    console.log(coorStudent2)
    console.log(coorStudent3)

    if(coorStudent1 > coorStudent2 && coorStudent1 > coorStudent3)
    {
        result4.innerHTML = `Sinh viên xa trường nhất : ${studentName1}`
    }
    else if(coorStudent2 > coorStudent1 && coorStudent2 > coorStudent3)
    {
        result4.innerHTML = `Sinh viên xa trường nhất : ${studentName2}`
    }
    else if(coorStudent3 > coorStudent1 && coorStudent3 > coorStudent2)
    {
        result4.innerHTML = `Sinh viên xa trường nhất : ${studentName3}`
    }

}
