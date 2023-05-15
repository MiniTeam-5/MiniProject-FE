function formatDateString(startDate: Date, endDate: Date): string {
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth() + 1;
  const startDay = startDate.getDate();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth() + 1;
  const endDay = endDate.getDate();

  let dateString = '';
  if (startDate.getTime() === endDate.getTime()) {
    dateString = `${startYear}년 ${startMonth}월 ${startDay}일`; // 시작일과 종료일이 같은 경우
  } else if (startYear === endYear && startMonth === endMonth) {
    dateString = `${startYear}년 ${startMonth}월 ${startDay}일 ~ ${endDay}일`; // 년도와 월이 같고 일만 다른 경우
  } else if (startYear === endYear) {
    dateString = `${startYear}년 ${startMonth}월 ${startDay}일 ~ ${endMonth}월 ${endDay}일`; // 년도는 같고 월만 다른 경우
  } else {
    dateString = `${startYear}년 ${startMonth}월 ${startDay}일 ~ ${endYear}년 ${endMonth}월 ${endDay}일`; // 년도가 다른 경우
  }
  return dateString;
}

export default formatDateString;
