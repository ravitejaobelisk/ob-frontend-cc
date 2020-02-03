import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import PostList from '../components/postList';

interface IState {
  posts: any[];
  isLoading: Boolean;
}

/**
 * Home component to render all the posts from the service
 * Fetches posts from the service and renders as list on the page
 */
export default class Home extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false
    };
  }

  public componentDidMount(): void {
    this.setState({ isLoading: true });
    axios.get('https://jsonplaceholder.typicode.com/posts').then(data => {
      this.setState({
        posts: data.data,
        isLoading: false
      });
    });
  }

  public render() {
    const { posts, isLoading } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <PostList posts={posts} isLoading={isLoading} />
          </div>
        </div>
      </div>
    );
  }
}
