import {
  TwemojiRunningShoe,
  TwemojiManSwimmingMediumLightSkinTone,
  NotoV1ManLiftingWeights,
  TwemojiWomanCartwheelingMediumLightSkinTone,
} from '../components/Ui/assets/Svgs.jsx';

export const activities = {
  RUNNING: {
    time: 60,
    calories: 580,
    hebrewName: 'ריצה',
    icon: TwemojiRunningShoe,
  },
  WORKOUT: {
    time: 30,
    calories: 260,
    hebrewName: 'אימון כוח',
    icon: NotoV1ManLiftingWeights,
  },
  SWIMMING: {
    time: 45,
    calories: 750,
    hebrewName: 'שחייה',
    icon: TwemojiManSwimmingMediumLightSkinTone,
  },
  AEROBIC: {
    time: 30,
    calories: 260,
    hebrewName: 'אירובי',
    icon: TwemojiWomanCartwheelingMediumLightSkinTone,
  },
};
