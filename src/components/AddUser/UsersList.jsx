import { motion } from 'motion/react';
import { useAppContext } from '../../context/AppContext';
import {
  MaterialSymbolsSubdirectoryArrowRightRounded,
  SolarUserBold,
} from '../Ui/assets/Svgs';

function UsersList() {
  const { users, SwitchUser, DeleteUser } = useAppContext();
  if (users.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <motion.div className="mb-14">
          <MaterialSymbolsSubdirectoryArrowRightRounded className="w-16 h-16 fill-white -rotate-90" />
        </motion.div>
        <p className="w-8/12">אין כרגע משתמשים... קדימה להוסיף !</p>
      </div>
    );
  }
  return users.map((user) => (
    <motion.div
      layout
      key={user.userId}
      className="w-full flex items-center gap-2 mb-4 text-xl p-4 border-4 rounded-xl font-bold relative"
    >
      <button
        onClick={() => DeleteUser(user.userId)}
        className="w-5 h-5 bg-red-400 flex items-center justify-center text-xs text-black border-2 font-bold rounded-full absolute top-2 left-2"
      >
        <span className="flex items-center justify-center">X</span>
      </button>

      <SolarUserBold className="fill-white w-6 h-6" />
      <span
        className="w-[80%] cursor-pointer"
        onClick={() => SwitchUser(user.userId)}
      >
        {user.name}
      </span>
    </motion.div>
  ));
}

export default UsersList;
