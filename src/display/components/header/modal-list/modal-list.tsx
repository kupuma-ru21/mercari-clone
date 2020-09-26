import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { ElInfo, ModalContent } from '@/types/modal';
import { textCheck } from '@/logic/modal-list-logic';
import Styles from './modal-list-style.scss';

type Props = {
  itemInfo: {
    item: ModalContent;
    elInfo: ElInfo;
  };
};

const ModalList: React.FC<Props> = ({ itemInfo }) => {
  const [className, setClassName] = useState(Styles.listItem);
  const addBackgroundColor = (): void => {
    setClassName([Styles.listItem, Styles.hoverListItem].join(' '));
  };
  const removeBackgroundColor = (): void => setClassName(Styles.listItem);

  const { item, elInfo } = itemInfo;
  const { history } = useReactRouter();
  const transaction = (): void => {
    if (textCheck(item.text)) {
      history.push(`/${elInfo.name}`);
      return;
    }
    history.push(`/${elInfo.name}/${item.id}`);
  };

  return (
    <li
      className={className}
      onMouseEnter={addBackgroundColor}
      onMouseLeave={removeBackgroundColor}
      onClick={transaction}
    >
      {item.text}
    </li>
  );
};

export default ModalList;
