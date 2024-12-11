/* eslint-disable react/prop-types */
import { Link } from 'react-router';
import CircleButton from './CircleButton';
import {
  SolarUserBold,
  IconParkOutlineHistory,
  GameIconsDonut,
  IcSharpHome,
} from '../Ui/assets/Svgs';

export const HomeButton = () => {
  return (
    <Link to={'/home'}>
      <CircleButton>
        <IcSharpHome className="fill-white" />
      </CircleButton>
    </Link>
  );
};

export const AddUserButton = () => {
  return (
    <Link to={'/add-user'}>
      <CircleButton>
        <SolarUserBold className="fill-white w-11 h-11" />
      </CircleButton>
    </Link>
  );
};

export const DonutsButton = ({ cal = true }) => {
  return (
    <Link to={'/donuts'}>
      <CircleButton animate={`${!cal && 'animate-bounce'}`}>
        <GameIconsDonut className="fill-white" />
      </CircleButton>
    </Link>
  );
};
export const HistoryButton = () => {
  return (
    <Link to={'/history'}>
      <CircleButton>
        <IconParkOutlineHistory className="stroke-white" />
      </CircleButton>
    </Link>
  );
};
