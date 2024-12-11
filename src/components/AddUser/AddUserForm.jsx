import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import CircleButton from '../Buttons/CircleButton';
import { MaterialSymbolsAdd2 } from '../Ui/assets/Svgs';

function AddUserForm() {
  const [error, setError] = useState(null);
  const { users, AddUser } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userName = new FormData(e.currentTarget).get('name').trim();

    if (userName === '') {
      setError('שם משתמש לא יכול להיות ריק.');
      return;
    }
    if (users.find((user) => user.name === userName)) {
      setError('שם משתמש כבר קיים. נסה שם אחר או בחר מרשימת המשתמשים למטה');
      return;
    }
    AddUser(userName);
  };
  return (
    <form
      className="mt-8"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label
        htmlFor="name"
        className="mb-4 font-bold"
      >
        שם משתמש:
        <div className="flex items-center justify-center gap-4">
          <input
            className="bg-transparent ring-4 ring-white focus-visible:ring-white p-4 w-full mt-4 rounded-xl"
            type="text"
            name="name"
            id="name"
            placeholder="הכנס שם משתמש"
            onChange={() => setError(null)}
            autoComplete="off"
          />
          <button
            type="submit"
            className="flex items-center justify-center mt-4"
          >
            <CircleButton
              border="border-2"
              text="text-white"
            >
              <MaterialSymbolsAdd2 className="fill-white w-4 h-4" />
            </CircleButton>
          </button>
        </div>
      </label>
      {error && <p className="text-red-400 text-lg mt-4 max-w-72">{error}</p>}
    </form>
  );
}

export default AddUserForm;
