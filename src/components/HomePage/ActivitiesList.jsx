/* eslint-disable react/prop-types */
import { formatMinutesIntoTimeString } from '../../utils/formatting';
import { calcAllActivities } from '../../utils/calculations';
import { MaterialSymbolsSubdirectoryArrowRightRounded } from '../Ui/assets/Svgs';

function ActivitiesList({ cal }) {
  const allActivities = calcAllActivities(cal);
  if (cal === 0)
    return (
      <div className="max-w-72 grid grid-cols-[64px_minmax(0,_1fr)] gap-2 font-normal text-lg">
        <MaterialSymbolsSubdirectoryArrowRightRounded className="-rotate-90 fill-white w-16 h-16 mb-4" />
        אין פה בכלל קלוריות... הגיע הזמן ללחוץ על מקש הסופגניות ולהוסיף מאחת
        הכרטיסיות
      </div>
    );
  return (
    <div className="w-11/12 md:w-96 mx-auto">
      <h2 className="text-4xl pb-3 font-bold text-center mb-5">
        רשימת פעילויות מומלצות להורדת כל הקלוריות
      </h2>
      {cal !== 0 &&
        allActivities.map((activity) => (
          <div
            key={activity.name}
            className="bg-neutral-800 mx-auto grid grid-cols-[60px_minmax(0,_1fr)_minmax(0,_1fr)] gap-4 w-80 mb-4 py-6 px-3  rounded-3xl"
          >
            <activity.icon className="w-11 h-11 fill-white self-center justify-self-center" />
            <div className="col-span-2">
              <p>
                שם הפעילות:
                <span className="font-bold mx-2">{activity.hebrewName}</span>
              </p>

              <p>
                שריפת קלוריות באימון יחיד:
                <span className="font-bold mx-2">{activity.calories}</span>
              </p>
              <p>
                זמן לאימון יחיד:
                <span className="font-bold mx-2">{activity.time} דקות</span>
              </p>
              <p>
                מספר החזרות לאימון יחיד:
                <span className="font-bold mx-2">{activity.repeats}</span>
              </p>
              <p className="mt-4 underline">
                סה&quot;כ זמן כולל להורדת כל הקלוריות ב{activity.hebrewName}:
              </p>
            </div>
            <p className="rounded-lg px-4 py-2 font-bold bg-yellow-300 text-neutral-800 text-2xl text-center justify-self-center col-span-3">
              {formatMinutesIntoTimeString(activity.time * activity.repeats)}
            </p>
          </div>
        ))}
      <p className="max-w-64 text-center mx-auto opacity-50 italic leading-5">
        * תיתכן סטייה של עד שעה אחת יותר בזמן הכולל עקב עיגול כלפי מעלה של מספר
        החזרות לאימון יחיד
      </p>
    </div>
  );
}

export default ActivitiesList;
