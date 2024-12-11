/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Controls from '../components/Ui/Controls';
import { useAppContext } from '../context/AppContext';
import {
  AddUserButton,
  DonutsButton,
  HomeButton,
} from '../components/Buttons/Buttons';
import { FluentEmojiWinkingFaceWithTongue } from '../components/Ui/assets/Svgs';
import HistoryList from '../components/History/HistoryList';

function History() {
  const { cal, currentUser, CheckIfUserExist } = useAppContext();

  useEffect(() => {
    CheckIfUserExist();
  }, []);

  return (
    currentUser && (
      <div className="flex flex-col items-center gap-4 max-h-screen">
        <Controls>
          <HomeButton />
          <DonutsButton cal={cal} />
          <AddUserButton />
        </Controls>

        <h2 className="mt-6 text-5xl font-bold border-b-2 pb-4 text-center">
          סופגניות שתקעת
        </h2>

        <p className="text-center w-72">
          כאן מוצגת רשימת כל היסטוריית זלילת הסופגניות שלך בפירוט
          <span className="mx-2 inline-block">
            <FluentEmojiWinkingFaceWithTongue className="-mb-1 w-6 h-6 rotate-[16deg]" />
          </span>
        </p>

        <HistoryList />
      </div>
    )
  );
}

export default History;
