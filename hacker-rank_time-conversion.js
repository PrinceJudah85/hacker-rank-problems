/* Problem: Given a time in -hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

function timeConversion(s) {
  let hours = parseInt(s.split(":")[0]);
  let militaryT;

  if (s.includes("PM") && hours !== 12) {
    hours += 12;
    militaryT = hours.toString() + s.slice(2, -2);
  } else if (s.includes("AM") && hours === 12) {
    hours = 0;
  }
  militaryT = hours.toString().padStart(2, "0") + s.slice(2, -2);
  console.log(militaryT);
  return militaryT;
}

timeConversion("12:05:45AM");
