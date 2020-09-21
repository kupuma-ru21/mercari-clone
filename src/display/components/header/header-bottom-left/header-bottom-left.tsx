import React, { memo } from 'react';
import ListIcon from '@material-ui/icons/List';
import MoreIcon from '@material-ui/icons/More';
import Styles from './header-bottom-left-style.scss';

const HeaderBottomLeft: React.FC = () => {
  return (
    <div className={Styles.leftSide}>
      <div className={Styles.categoryWrap}>
        <ListIcon className={Styles.icon} fontSize="small" />
        <span className={Styles.text}>カテゴリーから探す</span>
      </div>
      <div className={Styles.brandWrap}>
        <MoreIcon className={Styles.icon} fontSize="small" />
        <span className={Styles.text}>ブランドから探す</span>
      </div>
    </div>
  );
};

export default memo(HeaderBottomLeft);
