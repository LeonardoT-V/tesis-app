import { Route, Switch } from 'wouter'
import { Pages_Items } from '../utils/const'
import NavLayout from '../layouts/NavLayout'
import CreateDatabasesPage from './CreateDatabasesPage'

function RouterPages() {
  return (
    <Switch>
      <Route path="/">
        <CreateDatabasesPage />
      </Route>
      <NavLayout>
        {Pages_Items.map((item) => (
          <Route path={item.path} key={item.path}>
            <item.component />
          </Route>
        ))}
      </NavLayout>
    </Switch>
  )
}

export default RouterPages
