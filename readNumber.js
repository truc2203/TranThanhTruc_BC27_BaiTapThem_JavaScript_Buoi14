function readNumber() {
  var hundred = +document.getElementById("hundred").value;
  var dozen = +document.getElementById("dozen").value;
  var unit = +document.getElementById("unit").value;

  var read = document.getElementById("read");
  var textNum
  var textNum2
  var textNum3

  switch (hundred) {
    case 0:
     textNum = "Không";
      break;
    case 1:
     textNum = "Một";
      break;
    case 2:
     textNum = "Hai";
      break;
    case 3:
     textNum = "Ba";
      break;
    case 4:
     textNum = "Bốn";
      break;
    case 5:
     textNum = "Năm";
      break;
    case 6:
     textNum = "Sáu";
      break;
    case 7:
     textNum = "Bảy";
      break;
    case 8:
     textNum = "Tám";
      break;
    case 9:
     textNum = "Chín";
      break;
    default:
     textNum = "NAN";
  }
  switch (dozen) {
    case 0:
     textNum2 = "Không";
      break;
    case 1:
     textNum2 = "Một";
      break;
    case 2:
     textNum2 = "Hai";
      break;
    case 3:
     textNum2 = "Ba";
      break;
    case 4:
     textNum2 = "Bốn";
      break;
    case 5:
     textNum2 = "Năm";
      break;
    case 6:
     textNum2 = "Sáu";
      break;
    case 7:
     textNum2 = "Bảy";
      break;
    case 8:
     textNum2 = "Tám";
      break;
    case 9:
     textNum2 = "Chín";
      break;
    default:
     textNum2 = "NAN";
  }switch (unit) {
    case 0:
     textNum3 = " ";
      break;
    case 1:
     textNum3 = "Mốt";
      break;
    case 2:
     textNum3 = "Hai";
      break;
    case 3:
     textNum3 = "Ba";
      break;
    case 4:
     textNum3 = "Bốn";
      break;
    case 5:
     textNum3 = "Năm";
      break;
    case 6:
     textNum3 = "Sáu";
      break;
    case 7:
     textNum3 = "Bảy";
      break;
    case 8:
     textNum3 = "Tám";
      break;
    case 9:
     textNum3 = "Chín";
      break;
    default:
     textNum3 = "NAN";
  }

  read.innerHTML = `${textNum} Trăm ${textNum2} Mươi ${textNum3}`;
}
