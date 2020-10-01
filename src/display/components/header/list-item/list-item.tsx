import React, { useState, useContext } from 'react';
import useReactRouter from 'use-react-router';
import {
  categoryListTextCheck,
  textCheck,
} from '@/logic/header/list-item-logic';
import { Props } from '@/types/header/list-item';
import { ModalContext } from '@/contexts';
import Styles from './list-item-style.scss';

const ListItem: React.FC<Props> = ({ itemInfo }) => {
  const { state, setState } = useContext(ModalContext);
  const { item, elInfo } = itemInfo;
  const [className, setClassName] = useState(Styles.listItem);

  const onMouseEnter = (): void => {
    setClassName([Styles.listItem, Styles.hoverListItem].join(' '));
    if (categoryListTextCheck(item.text)) {
      setState({ ...state, displayModalDetailFlg: false, listItemID: item.id });
      return;
    }
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

export default ListItem;
