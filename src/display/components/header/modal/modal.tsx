import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { Props } from '@/types/header/modal';
import { ModalContext } from '@/contexts';
import { ModalList, ModalDetail } from '@/display/components/header';
import Styles from './modal-style.scss';

const Modal: React.FC<Props> = ({ elInfo }: Props) => {
  const [state, setState] = useState({
    displayModalDetailFlg: false,
    displayModalListFlg: false,
    listItemID: 1,
  });
  const { displayModalDetailFlg, displayModalListFlg } = state;
  const detailFlg = displayModalDetailFlg && elInfo.name === 'category';

  const onMouseEnter = (): void => {
    setState({ ...state, displayModalListFlg: true });
  };
  const onMouseLeave = (): void => {
    setState({
      ...state,
      displayModalDetailFlg: false,
      displayModalListFlg: false,
    });
  };

  const [className, setClassName] = useState('');
  const addBackgroundColor = (): void => setClassName(Styles.head);
  const removeBackgroundColor = (): void => setClassName('');

  const { history } = useReactRouter();
  const transaction = (): void => history.push(`/${elInfo.name}`);

  return (
    <div
      role="directory"
      className={Styles.modalWrap}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
      <div className={Styles.modalListWrap}>
        <ModalContext.Provider value={{ state, setState }}>
          <ul>{displayModalListFlg && <ModalList elInfo={elInfo} />}</ul>
          <div role="group" className={Styles.detail}>
            {detailFlg && <ModalDetail />}
          </div>
        </ModalContext.Provider>
      </div>
    </div>
  );
};

export default Modal;
