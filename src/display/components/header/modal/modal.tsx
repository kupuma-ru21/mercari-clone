import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { Props } from '@/types/modal';
import { ModalList } from '@/display/components';

const Modal: React.FC<Props> = ({ elInfo }: Props) => {
  const [displayFlg, setDisplayFlg] = useState(false);
  const onMouse = (): void => setDisplayFlg(!displayFlg);
  const { history } = useReactRouter();
  const transaction = (): void => history.push(`/${elInfo.name}`);

  return (
    <div>
      <div
        role="heading"
        onMouseOver={onMouse}
        onMouseOut={onMouse}
        onClick={transaction}
      >
        {elInfo.el}
      </div>
      <div role="directory">
        {displayFlg && <ModalList list={elInfo.modal} />}
      </div>
    </div>
  );
};

export default Modal;
