export const convertDateToUnixTimestamp = (date) => {
    return Math.floor(date.getTime());
  };
export const convertUnixTimestampToDate=(unixTimestamp)=>{
    const milliseconds = unixTimestamp*1000;
    return new Date(milliseconds).toLocaleDateString();
}

export const createDate = (endDate, days, weeks, months, years) => {
    const date = new Date(endDate);
    console.log("createDate checking",days,weeks,months,years);
    days = Number(days) || 0;
    weeks = Number(weeks) || 0;
    months = Number(months) || 0;
    years = Number(years) || 0;
    console.log("createDate checking",days,weeks,months,years);
    date.setDate(date.getDate() + days + weeks * 7);
    date.setMonth(date.getMonth() + months); 
    date.setFullYear(date.getFullYear() + years);
    console.log(date);
    return date;
};