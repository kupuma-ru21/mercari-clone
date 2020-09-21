import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { Props } from '@/types/modal';
import Styles from './modal-style.scss';

const Modal: React.FC<Props> = ({ elInfo }: Props) => {
  const [displayFlg, setDisplayFlg] = useState(false);
  const onMouse = (): void => setDisplayFlg(!displayFlg);
  const { history } = useReactRouter();
  const transaction = (): void => history.push('/category');

  return (
    <div>
      <div
        role="heading"
        onMouseOver={onMouse}
        onMouseOut={onMouse}
        onClick={transaction}
      >
        {elInfo.el}
      </div>
      <div role="directory">
        {displayFlg && (
          <>
            {elInfo.modal.map((val: any) => (
              <li className={Styles.list} key={val.id}>
                {val.text}
              </li>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
