import { activities } from '../data/activites';

export const calcAllActivities = (cal) => {
  const calculatedActivitiesArray = [];
  for (const act in activities) {
    const repeats = Math.ceil(cal / activities[act].calories);
    calculatedActivitiesArray.push({ name: act, repeats, ...activities[act] });
  }

  return calculatedActivitiesArray;
};
