import React from 'react';
import useReactRouter from 'use-react-router';
import { Props, ModalContent } from '@/types/modal';
import { ModalList } from '@/display/components';
import Styles from './modal-style.scss';

const Modal: React.FC<Props> = ({ elInfo }: Props) => {
  const { history } = useReactRouter();
  const transaction = (): void => history.push(`/${elInfo.name}`);

  return (
    <div className={Styles.modalWrap}>
      <div role="heading" className={Styles.head} onClick={transaction}>
        {elInfo.el}
      </div>
      <ul>
        {elInfo.modalList.map((item: ModalContent) => (
          <ModalList itemInfo={{ item, elInfo }} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Modal;
