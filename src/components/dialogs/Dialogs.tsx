import React, {FC} from 'react';
import s from './Dialogs.module.css';

interface IDialogs {

}

const Dialogs: FC<IDialogs> = ({}) => {
  return (
    <div className={s.wrapper}>
      Dialogs
    </div>
  );
};

export default Dialogs;
