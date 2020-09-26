import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { Props, ModalContent } from '@/types/modal';
import { ModalList } from '@/display/components';
import Styles from './modal-style.scss';

const Modal: React.FC<Props> = ({ elInfo }: Props) => {
  const [className, setClassName] = useState('');
  const addBackgroundColor = (): void => setClassName(Styles.head);
  const removeBackgroundColor = (): void => setClassName('');

  const [displayFlg, setDisplayFlg] = useState(false);
  const { history } = useReactRouter();
  const transaction = (): void => history.push(`/${elInfo.name}`);
  const modalDisplayControl = (): void => setDisplayFlg(!displayFlg);

  return (
    <div
      role="directory"
      className={Styles.modalWrap}
      onMouseEnter={modalDisplayControl}
      onMouseLeave={modalDisplayControl}
    >
      <div
        role="heading"
        className={className}
        onMouseEnter={addBackgroundColor}
        onMouseLeave={removeBackgroundColor}
        onClick={transaction}
      >
        {elInfo.el}
      </div>
      <ul>
        {displayFlg &&
          elInfo.modalList.map((item: ModalContent) => (
            <ModalList itemInfo={{ item, elInfo }} key={item.id} />
          ))}
      </ul>
    </div>
  );
};

export default Modal;
