// Format Date
export const formatDate = (date) => {
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  const dateArr = date.split("-");

  const newDate = new Date(date);

  return `${dateArr[2]} ${months[dateArr[1] - 1]} ${dateArr[0]}, ${
    days[newDate.getDay()]
  }`;
};

// Change Title On Page Load
export const changeTitle = (title) => {
  document.title = `Evde Öğren | ${title}`;
};

// Scroll Top On Page Load
export const scrollTop = () => {
  window.scrollTo(0, 0);
};
