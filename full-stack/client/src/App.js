import './App.css';
import Posts from './components/Posts';
import { Container, Header, Segment } from 'semantic-ui-react'
import { Link, Route, Switch } from 'react-router-dom';
import PostDetail from './components/PostDetail';
import Comments from './components/Comments'

function App() {

  return (
    <Container>
      <Segment vertical>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/post/:postId" component={PostDetail} />
          <Comments />
          {/* Fallback Page - 404 */}
          <Route>
            <Segment vertical textAlign="center">
              <Header>404 - Page not found</Header>
              <Link to="/">Click here to return home</Link>
            </Segment>
          </Route>
        </Switch>
      </Segment>
    </Container>
  );
}

export default App;