import React from 'react';
import { motion } from 'motion/react';
import { donuts } from '../../data/donuts';
import {
  formatDate,
  formatTime,
  numberFormatting,
} from '../../utils/formatting';
import HistoryCardDeleteButton from './HistoryCardDeleteButton';

function HistoryCard({ item }) {
  const { image } = donuts.find((donut) => donut.name === item.name) || {
    image: '',
  };
  return (
    <motion.li
      layout
      key={item.createdAt}
      className="p-4 mb-8 border-r-4"
    >
      <div className="mb-4 flex items-center justify-between">
        <p>
          {formatDate(item.createdAt)} | {formatTime(item.createdAt)}
        </p>
        <HistoryCardDeleteButton item={item} />
      </div>
      <img
        src={image}
        className="w-12 h-12 object-cover mx-auto"
      />
      <p className="text-4xl font-bold text-center">
        {numberFormatting(item.calories * item.num)} קלוריות
      </p>
      <p className="text-center mt-2">
        מ{`${item.num === 1 ? 'סופגנייה אחת' : ` ${item.num} סופגניות`}`}
      </p>
      <p className="text-center">({item.name})</p>
    </motion.li>
  );
}

export default HistoryCard;
