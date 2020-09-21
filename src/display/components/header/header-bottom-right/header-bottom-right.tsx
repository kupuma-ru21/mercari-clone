import React, { memo, useState } from 'react';
import useReactRouter from 'use-react-router';
import { Button } from '@material-ui/core';
import Styles from './header-bottom-right-style.scss';

type Variant = 'text' | 'outlined' | 'contained';

const HeaderBottomRight: React.FC = () => {
  const [loginVariant, setLoginVariant] = useState<Variant>('outlined');
  const loginMouseOver = (): void => setLoginVariant('contained');
  const loginMouseOut = (): void => setLoginVariant('outlined');
  const { history } = useReactRouter();
  const register = (): void => history.push('/signup');

  return (
    <div className={Styles.rightSide}>
      <Button
        title="memberRegister"
        variant="contained"
        color="secondary"
        size="small"
        onClick={register}
      >
        新規会員登録
      </Button>
      <Button
        title="login"
        className={Styles.login}
        variant={loginVariant}
        color="primary"
        size="small"
        onMouseOver={loginMouseOver}
        onMouseOut={loginMouseOut}
      >
        ログイン
      </Button>
    </div>
  );
};

export default memo(HeaderBottomRight);
