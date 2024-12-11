/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { useState, createContext, useEffect, useContext } from 'react';
import { donuts as donutsData } from '../data/donuts';
import { useNavigate } from 'react-router';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState(
    localStorage.users ? JSON.parse(localStorage.users) : []
  );

  const [currentUser, setCurrentUser] = useState(
    users.find((user) => user.isCurrentUser === true)
  );

  useEffect(() => {
    setCurrentUser(users.find((user) => user.isCurrentUser === true));
  }, [users]);

  const navigate = useNavigate();

  const CheckIfUserExist = () => {
    if (users.every((user) => user.isCurrentUser === false))
      navigate('/add-user');
  };

  const AddUser = (userName) => {
    const setAllPrevIsCurrentUserToFalse = users.map((user) => {
      return { ...user, isCurrentUser: false };
    });
    const newUsersArray = [
      { userId: new Date().getTime(), name: userName, isCurrentUser: true },
      ...setAllPrevIsCurrentUserToFalse,
    ];
    localStorage.users = JSON.stringify(newUsersArray);
    setUsers(newUsersArray);
    navigate('/home');
  };

  const SwitchUser = (userId) => {
    const switchUserInArrayToIsCurrentUser = users.map((user) => {
      if (user.userId === userId) {
        return { ...user, isCurrentUser: true };
      } else {
        return { ...user, isCurrentUser: false };
      }
    });
    localStorage.users = JSON.stringify(switchUserInArrayToIsCurrentUser);
    setUsers(switchUserInArrayToIsCurrentUser);
    navigate('/home');
  };

  const DeleteUser = (userId) => {
    const newHistory = history.filter(
      (historyItem) => historyItem.user.userId !== userId
    );
    const newUsers = users.filter((user) => user.userId !== userId);
    localStorage.history = JSON.stringify(newHistory);
    localStorage.users = JSON.stringify(newUsers);
    setUsers(newUsers);
    setHistory(newHistory);
  };

  const [donuts, setDonuts] = useState();
  const [cal, setCal] = useState(0);
  const [history, setHistory] = useState(
    localStorage.history ? JSON.parse(localStorage.history) : []
  );
  const [filteredHistory, setFilteredHistory] = useState([]);

  useEffect(() => {
    setDonuts(donutsData);
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.history = JSON.stringify(history);
      setFilteredHistory(() => {
        const filteredHistoryByUser = history.filter(
          (item) => item.user.userId === currentUser.userId
        );
        return filteredHistoryByUser;
      });

      setCal(() => {
        return history.reduce((acc, item) => {
          if (item.user.userId !== currentUser.userId) return acc;
          return item.calories * item.num + acc;
        }, 0);
      });
    }
  }, [history, currentUser]);

  const addToTotalCalories = (value) => {
    setCal((prev) => prev + value);
  };
  const subtractFromTotalCalories = (value) => {
    setCal((prev) => prev - value);
  };

  const handleAddToTotalCalories = ({ totalCalories, donut, donutsNumber }) => {
    addToTotalCalories(totalCalories);
    setHistory((prev) => [
      {
        user: {
          userId: currentUser.userId,
          name: currentUser.name,
        },
        name: donut.name,
        num: donutsNumber,
        calories: donut.calories,
        createdAt: new Date().getTime(),
      },
      ...prev,
    ]);
    navigate('/home');
  };

  const handleDeleteHistoryCard = ({ createdAt, calories, num }) => {
    const newHistory = history.filter(
      (historyItem) => historyItem.createdAt !== createdAt
    );
    subtractFromTotalCalories(calories * num);
    setHistory(newHistory);
  };

  return (
    <AppContext.Provider
      value={{
        users,
        donuts,
        addToTotalCalories,
        subtractFromTotalCalories,
        cal,
        history: filteredHistory,
        setHistory,
        currentUser,
        setCurrentUser,
        AddUser,
        SwitchUser,
        DeleteUser,
        CheckIfUserExist,
        handleAddToTotalCalories,
        handleDeleteHistoryCard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
