const submitBtn = document.querySelector(".submitBtn");
const resetBtn = document.querySelector(".resetBtn");
const birthDate = document.querySelector(".bDate");

const resultMsg = document.querySelector("#resultTxt");
const loader = document.querySelector(".loader");
const happyImg = document.querySelector(".happy");
const sadImg = document.querySelector(".sad");

loader.style.display = "none";
happyImg.style.display = "none";
sadImg.style.display = "none";

const successMsg = "Yay Congratulations!! your birthday is palindrome.";
const unsuccessMsg = "Seems like your birthday is not palindrome.";

let count = 0;

function clickHandler(e) {
  e.preventDefault();
  const dateInput = birthDate.value;
  console.log(dateInput);
  const dateArr = dateInput.split("-");
  console.log(dateArr);
  const year = dateArr[0];
  const month = dateArr[1];
  const date = dateArr[2];
  console.log(date);
  console.log(month);
  console.log(year);

  const yyyymmdd = parseInt(year + month + date);
  const ddmmyyyy = parseInt(date + month + year);
  const mmddyy = parseInt(month + date + year);
  // let joinedDate = parseInt(date.join(""));
  console.log(yyyymmdd);
  console.log(ddmmyyyy);
  console.log(mmddyy);
  // console.log(typeof yyyymmdd);
  birthDate.disabled = true;
  submitBtn.disabled = true;
  loader.style.display = "block";
  resultMsg.style.display = "none";
  setTimeout(function () {
    loader.style.display = "none";
    resultMsg.style.display = "block";
    if (count === 0) {
      sadImg.style.display = "block";
    } else {
      happyImg.style.display = "block";
    }
  }, 5200);

  checkPalindrome(yyyymmdd);
  console.log("Done with 1st round now onto next");
  console.log(ddmmyyyy);
  if (count === 0) {
    checkPalindrome(ddmmyyyy);
    console.log("Done with 2nd round now onto next");
  }
  if (count === 0) {
    console.log(mmddyy);
    checkPalindrome(mmddyy);
    console.log("Done with final round");
  }
  if (count === 0) {
    setMessage(unsuccessMsg);
  }
}

function checkPalindrome(checkDate) {
  const originalNo = checkDate;
  let reverseNo = 0;
  let remainder;
  while (checkDate !== 0) {
    remainder = checkDate % 10;
    console.log(reverseNo);
    reverseNo = reverseNo * 10 + remainder;
    checkDate = parseInt(checkDate / 10);
    console.log(checkDate);
  }
  console.log(reverseNo);

  let missedDays;

  if (originalNo === reverseNo) {
    // console.log("Hey Congratulations, your birthday is palindrome");
    setMessage(successMsg);

    count++;
    console.log(count);
  }
}
function resetHandler() {
  birthDate.disabled = false;
  submitBtn.disabled = false;
  birthDate.value = "";
  happyImg.style.display = "none";
  sadImg.style.display = "none";
  resultMsg.style.display = "none";
  count = 0;
}

function setMessage(Msg) {
  resultMsg.innerText = Msg;
}

submitBtn.addEventListener("click", clickHandler);

resetBtn.addEventListener("click", resetHandler);
