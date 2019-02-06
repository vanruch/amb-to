import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { lazyLoad } from './utils';
import { AuthService } from './services';

const Home: any = lazyLoad(() => import('./containers/Home'));
const AssetWrapper: any = lazyLoad(() => import('./containers/AssetWrapper'));
import './App.scss';

class App extends React.Component<any, any> {
  public state = {
    hideHeader: false,
  };

  constructor(props: any) {
    super(props);
    AuthService.getToken();
  }

  public render() {
    return (
      <div className='App'>

        {/* render app */}
        <main className='Main'>
          <Switch>
            {/* all app routes */}
            {/* <AssetWrapper /> */}
            <Route path='/:assetId' component={AssetWrapper} />
            <Route exact path='/' component={Home} />
            <Redirect from='*' to='/' />
          </Switch>
        </main>
        {/* render footer */}
      </div>
    );
  }
}

export default withRouter(App);
