/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate, Link } from 'react-router';
import CircleButton from '../components/Buttons/CircleButton';
import { SolarUserBold, TokenBrandedDonut } from '../components/Ui/assets/Svgs';

function Welcome() {
  const { users } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (users.length !== 0) navigate('/home');
  }, []);

  return (
    users.length === 0 && (
      <div className="max-w-96 mx-auto">
        <div className="flex flex-col items-center gap-8 text-center text-lg px-4">
          <h1 className="text-7xl font-bold">חנוכה שמח</h1>
          <TokenBrandedDonut className="w-32 h-32" />
          <p>ברוכים הבאים לאפליקציית מעקב קלוריות מסופגניות</p>
          <p>
            האפליקציה מחשבת בקלות את הזמן בו תצטרכו לבצע פעילויות ספורט בכדי
            להוריד את הקלוריות אותן צברתם. תוכלו לעקוב אחר צריכת הקלוריות שלכם
            בפירוט
          </p>

          <p>האפליקציה תומכת בריבוי משתמשים כך שכל משתמש רואה את הנתונים שלו</p>

          <p className="font-bold text-4xl">אז למי מחכים... בואו נתחיל!</p>
          <Link
            to={'/add-user'}
            className="my-8"
          >
            <CircleButton>
              <SolarUserBold className="fill-white w-11 h-11" />
            </CircleButton>
          </Link>

          <p className="text-sm opacity-50">
            * האתר נבנה למטרת כיף בלבד וכך יש להתייחס לנתונים המופיעים בו. כמו
            כן כל הנתונים נשמרים באופן מקומי במכשיר כך שפרטיות המשתמש נשמרת ואין
            שיתוף מידע
          </p>
        </div>
      </div>
    )
  );
}

export default Welcome;
