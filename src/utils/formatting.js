export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('he-IL', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
};

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('he-IL', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const numberFormatting = (number) => {
  return new Intl.NumberFormat('he-IL').format(number);
};

const formatHourToString = (expr) => {
  switch (expr) {
    case 1: {
      return 'שעה אחת';
    }
    case 2: {
      return 'שעתיים';
    }

    default:
      return `${numberFormatting(expr)} שעות`;
  }
};

export const formatMinutesIntoTimeString = (value) => {
  const hour = Math.floor(value / 60);
  const minutes = value % 60;

  if (hour === 0) return `${value} דקות`;

  return `${formatHourToString(hour)} ${
    minutes === 0 ? '' : `ו ${minutes} דקות`
  }`;
};
