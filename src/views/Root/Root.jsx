import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from '../../theme/GlobalStyle';
import store from '../../store/redux';
import StartView from '../StartView/StartView.jsx';
import GameView from '../GameView/GameView.jsx';
import EndView from '../EndView/EndView.jsx';

const Root = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <>
        <GlobalStyle />
        <Route exact path='/' component={StartView}/>
        <Route path='/game' component={GameView} />
        <Route path='/end' component={EndView} />
    </>
    </BrowserRouter>
    </Provider>
  );
}

export default Root;
