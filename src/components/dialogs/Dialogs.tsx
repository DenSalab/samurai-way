import React, {FC} from 'react';
import s from './Dialogs.module.css';

interface IDialogs {

}

const Dialogs: FC<IDialogs> = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.dialogItems}>
        <div className={s.item}>
          Name 1
        </div>
        <div className={s.item}>
          Name 2
        </div>
        <div className={s.item}>
          Name 3
        </div>
        <div className={s.item}>
          Name 4
        </div>
      </div>

      <div className={s.messages}>
        <div className={s.message}>
          Message 1
        </div>
        <div className={s.message}>
          Message 2
        </div>
        <div className={s.message}>
          Message 3
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
