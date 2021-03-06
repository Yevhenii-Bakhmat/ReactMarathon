import HomePage from './routes/HomePage';
// import StartPage from "./routes/Game/routes/Start";
import NotFound from './routes/NotFound';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';
import s from './styles.module.css';
import { NotificationContainer } from 'react-notifications';
import cn from 'classnames';
import 'react-notifications/lib/notifications.css';
import { useLocation, Route, Switch, Redirect } from 'react-router-dom';
import GamePage from './routes/Game';
import PrivateRoute from './components/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAsync } from './store/user';
import { selectUserLoading } from './store/user';
import ProfilePage from './routes/ProfilePage';
const App = () => {
  const location = useLocation('/');
  const paddingActive =
    location.pathname === '/' || location.pathname === '/game/board';
  const dispatch = useDispatch();

  const isUserLoading = useSelector(selectUserLoading);
  useEffect(() => {
    dispatch(getUserAsync());
  }, []);

  if (isUserLoading) {
    return 'Loading...';
  }
  return (
    <>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!paddingActive} />
            <div className={cn(s.wrap, { [s.isHomePage]: paddingActive })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <PrivateRoute path="/game" component={GamePage} />
                <PrivateRoute path="/about" component={AboutPage} />
                <PrivateRoute path="/user" component={ProfilePage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
      <NotificationContainer />
    </>
  );
};

export default App;
