/**
 * @function amountFormat
 * @description takes a number as an argument and returns a formatted number X.XXX
 * @param  { number } value - Number received in argument to be formatted
 * @return a formatted number
 */
const amountFormat = (value) => new Intl.NumberFormat("en-IN").format(value);

export default amountFormat;
