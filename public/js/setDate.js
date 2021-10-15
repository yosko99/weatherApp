const dateHTML = document.getElementById("date");
const timeHTML = document.getElementById("time");
const weekDays = { 0: "Monday", 1: "Tuesday", 2: "Wednesday", 3: "Thurdsay", 4: "Friday", 5: "Saturday", 6: "Sunday" }

const setDateTime = () => {
    let today = new Date();
    const time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const date = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();

    timeHTML.innerHTML = time;
    dateHTML.innerHTML = `${weekDays[today.getDay()]}, ${date}`
}

export default setDateTime