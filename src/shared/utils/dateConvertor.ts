// converts unix time stamps to normal date format
const toNormalDate = (unixTimeStamp: number): string => {
    return new Date(unixTimeStamp*1000).toLocaleDateString("en-US");
}

export default toNormalDate;