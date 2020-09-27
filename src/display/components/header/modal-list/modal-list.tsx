import React, { useState, useContext } from 'react';
import useReactRouter from 'use-react-router';
import { textCheck } from '@/logic/modal-list-logic';
import { Props } from '@/types/modal-list';
import { ModalContext } from '@/contexts';
import Styles from './modal-list-style.scss';

const ModalList: React.FC<Props> = ({ itemInfo }) => {
  const { state, setState } = useContext(ModalContext);
  const { item, elInfo } = itemInfo;
  const [className, setClassName] = useState(Styles.listItem);

  const onMouseEnter = (): void => {
    setClassName([Styles.listItem, Styles.hoverListItem].join(' '));
    setState({ ...state, displayModalDetailFlg: true, listItemID: item.id });
  };
  const onMouseLeave = (): void => setClassName(Styles.listItem);

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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={transaction}
    >
      {item.text}
    </li>
  );
};

export default ModalList;
