import React from 'react';
import { Modal, ModalContent } from '@/types/modal';
import Styles from './modal-list-style.scss';

type Props = {
  list: Modal;
};

const ModalList: React.FC<Props> = ({ list }) => {
  return (
    <ul className={Styles.list}>
      {list.map((item: ModalContent) => (
        <li className={Styles.listItem} key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default ModalList;
