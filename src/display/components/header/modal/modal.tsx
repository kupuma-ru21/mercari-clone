import React, { useState } from 'react';
import Styles from './modal-style.scss';

type Props = {
  el: JSX.Element;
};

const categoryArray = [
  { id: 1, text: 'レディース' },
  { id: 2, text: 'メンズ' },
  { id: 3, text: 'ベビー・キッズ' },
  { id: 4, text: 'インテリア・住まい・小物' },
  { id: 5, text: '本・音楽・ゲーム' },
  { id: 6, text: 'おもちゃ・ホビー・グッズ' },
  { id: 7, text: 'コスメ・香水・美容' },
  { id: 8, text: '家電・スマホ・カメラ' },
  { id: 9, text: 'スポーツ・メジャー' },
  { id: 10, text: 'ハンドメイド' },
  { id: 11, text: 'チケット' },
  { id: 12, text: '自転車・オートバイ' },
  { id: 13, text: 'その他' },
  { id: 14, text: 'カテゴリー 一覧' },
];

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
