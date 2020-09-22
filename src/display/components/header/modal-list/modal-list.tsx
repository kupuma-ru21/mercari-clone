import React from 'react';
import { Modal, ModalContent } from '@/types/modal';
import Styles from './modal-list-style.scss';

type Props = {
  list: Modal;
};

const ModalList: React.FC<Props> = ({ list }) => {
  return (
    <ul>
      {list.map((item: ModalContent) => (
        <li className={Styles.list} key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default ModalList;
