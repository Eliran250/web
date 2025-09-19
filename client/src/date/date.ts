const date = new Date();
export const year = date.getFullYear();
export const month = date.getMonth();
export const today = date.getDate();
export const daysInMonth = new Date(year, month, 0).getDate();
export const startDay = new Date(year, month - 1, 1).getDay();



export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
