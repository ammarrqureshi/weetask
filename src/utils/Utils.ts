export const titleCase = (str: string) => {
  const name = str;
  const newName = name
    .split(" ")
    .map((l) => l[0].toUpperCase() + l.substr(1))
    .join(" ");
  return newName;
};

export const getDate = (date: Date) => {
  const currentDate = new Date();
  const dateObj = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };

  const months = [
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
    "December",
  ];
  const shortmonth = months[dateObj.month].substr(0, 3);

  const longDate = `${dateObj.day} ${shortmonth} ${dateObj.year}`;
  const shortDate = `${dateObj.day} ${shortmonth}`;

  if (currentDate.getFullYear() === dateObj.year) {
    return shortDate;
  } else return longDate;
};
