import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { Props, ModalContent } from '@/types/modal';
import { ModalContext } from '@/contexts';
import { categoryDetail } from '@/constans/header';
import { ModalList, ModalDetail } from '@/display/components';
import Styles from './modal-style.scss';

const Modal: React.FC<Props> = ({ elInfo }: Props) => {
  const [state, setState] = useState({
    displayModalDetailFlg: false,
    displayModalListFlg: false,
    listItemID: 1,
  });
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
          <ul>
            {state.displayModalListFlg &&
              elInfo.modalList.map((item: ModalContent) => (
                <ModalList itemInfo={{ item, elInfo }} key={item.id} />
              ))}
          </ul>
        </ModalContext.Provider>
        <div role="group">
          {state.displayModalDetailFlg && (
            <>
              {categoryDetail[`categoryDetail_${state.listItemID}`].map(
                (item) => (
                  <ModalDetail key={item.id} item={item} />
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
