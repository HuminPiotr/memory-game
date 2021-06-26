import './Root.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import StartView from '../StartView/StartView';
import GameView from '../GameView/GameView';
import EndView from '../EndView/EndView';

const Root = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <>
        <Route exact path='/' component={StartView}/>
        <Route path='/game' component={GameView} />
        <Route path='/end' component={EndView} />
    </>
    </BrowserRouter>
    </Provider>
  );
}

export default Root;
