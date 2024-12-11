import { useAppContext } from '../../context/AppContext';
import HistoryCard from './HistoryCard';

function HistoryList() {
  const { history } = useAppContext();
  const totalHistoryDonuts = history.reduce((acc, item) => acc + item.num, 0);

  if (history.length === 0) {
    return (
      <div className="mt-16 flex flex-col justify-center items-center gap-8">
        <p className="">אין היסטוריה להציג</p>
        <p className="text-2xl font-bold">קדימה להוסיף סופגניות !!</p>
        <img
          className="h-20 w-20"
          src="https://i.pinimg.com/originals/97/7c/cf/977ccf4976d8c90488b683c51c828b5a.gif"
        />
      </div>
    );
  }

  return (
    <>
      <p className="text-xl font-bold">
        סה&quot;כ סופגניות שזללת:{' '}
        <span className="inline-flex justify-center items-center text-yellow-300 mr-2 border-4 p-2 rounded-full w-10 h-10">
          {totalHistoryDonuts}
        </span>
      </p>
      <ul className="mt-4 w-full sm:w-96 overflow-y-scroll h-[450px]">
        {history.map((item) => (
          <HistoryCard
            key={item.createdAt}
            item={item}
          />
        ))}
      </ul>
    </>
  );
}

export default HistoryList;
