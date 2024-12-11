/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import Controls from '../components/Ui/Controls';
import ActivitiesList from '../components/HomePage/ActivitiesList';
import {
  AddUserButton,
  DonutsButton,
  HistoryButton,
} from '../components/Buttons/Buttons';
import TotalCalories from '../components/HomePage/TotalCalories';

function Home() {
  const { cal, currentUser, CheckIfUserExist } = useAppContext();

  useEffect(() => {
    CheckIfUserExist();
  }, []);

  return (
    currentUser && (
      <div className="flex flex-col items-center">
        <Controls>
          <DonutsButton cal={cal} />
          <HistoryButton />
          <AddUserButton />
        </Controls>
        <div className="mt-8 text-5xl font-bold text-center mb-4 border-b-2 pb-4">
          שלום
          <p className="text-yellow-300 mt-2">{currentUser.name}</p>
        </div>

        <h1 className="text-3xl font-bold text-center mb-12">
          כמות קלוריות שצברת עד לרגע זה...
        </h1>
        <TotalCalories cal={cal} />
        <ActivitiesList cal={cal} />
      </div>
    )
  );
}

export default Home;
