import {
  DonutsButton,
  HistoryButton,
  HomeButton,
} from '../components/Buttons/Buttons';
import Controls from '../components/Ui/Controls';
import UsersList from '../components/AddUser/UsersList';
import AddUserForm from '../components/AddUser/AddUserForm';

function AddUserPage() {
  return (
    <div className="max-w-96 flex flex-col items-center mx-auto">
      <Controls>
        <HomeButton />
        <DonutsButton />
        <HistoryButton />
      </Controls>
      <h2 className="text-center mt-8 w-64">
        הכנס שם משתמש חדש או בחר מרשימת משתמשים קיימת
      </h2>
      <AddUserForm />
      <div className="h-[1px] w-full bg-white my-10" />
      <UsersList />
    </div>
  );
}

export default AddUserPage;
