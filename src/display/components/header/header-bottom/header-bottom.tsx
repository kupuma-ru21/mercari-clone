import React, { memo } from 'react';
import ListIcon from '@material-ui/icons/List';
import MoreIcon from '@material-ui/icons/More';
import { Button } from '@material-ui/core';
import Styles from './header-bottom-style.scss';

const HeaderBottom: React.FC = () => {
  return (
    <div className={Styles.headerBottomWrap}>
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

      <div className={Styles.rightSide}>
        <Button variant="contained" color="secondary" size="small">
          新規会員登録
        </Button>
        <Button
          className={Styles.login}
          variant="outlined"
          color="primary"
          size="small"
        >
          ログイン
        </Button>
      </div>
    </div>
  );
};

export default memo(HeaderBottom);
