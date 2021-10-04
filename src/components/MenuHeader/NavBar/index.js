import s from './styles.module.css';
import Logo from '../../Logo/index';
import cn from 'classnames';
import { ReactComponent as LoginSVG } from './assets/login.svg';
import { ReactComponent as UserSVG } from './assets/user.svg';
import { useSelector } from 'react-redux';
import { selectLocalId, selectUserLoading } from '../../../store/user';
const NavBar = ({
  isActive,
  bgActive = false,
  onClickHamburger,
  onClickLogin,
}) => {

  const handleClickHamburger = () => {
    onClickHamburger && onClickHamburger();
  };
  const handleClickLogin = () => {
    onClickLogin && onClickLogin();
  };

  const localId = useSelector(selectLocalId)
  const isLoadingUser = useSelector(selectUserLoading)

  return (
    <nav
      id={s.navbar}
      className={cn(s.root, {
        [s.bgActive]: bgActive,
      })}
    >
      <div className={s.navWrapper}>
        <p className={s.brand}>
          <Logo />
          LOGO
        </p>
        <div className={s.loginAndMenu}>

          {
          (!isLoadingUser && !localId)&&(
          <div className={s.loginWrap} onClick={handleClickLogin}>
            <LoginSVG />
          </div>)
          }

          {(!isLoadingUser && localId)&&(<div className={s.loginWrap}>
            <UserSVG />
          </div>)
          }
          <div
            onClick={handleClickHamburger}
            className={cn(s.menuButton, { [s.active]: isActive === true })}
          >
            <span />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
