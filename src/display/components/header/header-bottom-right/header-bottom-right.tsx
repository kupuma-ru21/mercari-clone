import React, { memo } from 'react';
import { Button } from '@material-ui/core';
import Styles from './header-bottom-right-style.scss';

const HeaderBottomRight: React.FC = () => {
  return (
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
  );
};

export default memo(HeaderBottomRight);
