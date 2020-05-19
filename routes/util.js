const formatTommorow = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate() + 1
    return new Date([year, month, day].map(formatNumber).join('-'))
};
const formatDate = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return new Date([year, month, day].map(formatNumber).join('-'))
};
const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
};

module.exports = {
    formatTommorow: formatTommorow,
    formatDate: formatDate
}
