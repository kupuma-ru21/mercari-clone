import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { Props } from '@/types/modal';
import { ModalList } from '@/display/components';
import Styles from './modal-style.scss';

const Modal: React.FC<Props> = ({ elInfo }: Props) => {
  const { history } = useReactRouter();
  const transaction = (): void => history.push(`/${elInfo.name}`);

  return (
    <div className={Styles.modalWrap}>
      <div role="heading" onClick={transaction}>
        {elInfo.el}
      </div>
      <ul>
        <ModalList list={elInfo.modal} />
      </ul>
    </div>
  );
};

export default Modal;
