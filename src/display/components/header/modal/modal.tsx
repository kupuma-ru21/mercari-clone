import React, { useState } from 'react';
import { categoryArray } from '@/constans';
import Styles from './modal-style.scss';

type Props = {
  el: JSX.Element;
};

const Modal: React.FC<Props> = ({ el }: Props) => {
  const [displayFlg, setDisplayFlg] = useState(false);
  const onMouse = (): void => setDisplayFlg(!displayFlg);

  return (
    <div>
      <div role="heading" onMouseOver={onMouse} onMouseOut={onMouse}>
        {el}
      </div>
      <div role="directory">
        {displayFlg && (
          <>
            {categoryArray.map((val: any) => (
              <li className={Styles.list} key={val.id}>
                {val.text}
              </li>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
