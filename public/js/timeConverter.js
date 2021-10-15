const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    const time = a.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    var dateAndTime = date + ' ' + month + ' ' + year + ' ' + time;
    return dateAndTime;
}

export default timeConverter;