import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import bgCover from '../theme/assets/img/bg5.jpg';
import userImage from '../theme/assets/img/user-icon2.png';
import UserProfileCard from '../components/userProfileCard';
import PostDetailCard from '../components/postDetailsCard';

export interface IValues {
  [key: string]: any;
}

export interface IState {
  id: number;
  post: any;
  user: any;
  isLoading: Boolean;
}

/**
 * Fetches the Post Description for the id in the param
 * and renders the post and user details for the request
 */
class PostDescription extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      post: {},
      user: {
        company: {},
        address: {}
      },
      isLoading: false
    };
  }

  public componentDidMount(): void {
    this.setState({ isLoading: true });
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
      .then(data => {
        this.setState({ post: data.data });

        return axios.get(
          `https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`
        );
      })
      .then(data => {
        this.setState({
          user: data.data,
          isLoading: false
        });
      });
  }

  public render() {
    const { post, user, isLoading } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <PostDetailCard post={post} isLoading={isLoading} />
          </div>
          <div className="col-md-4">
            <UserProfileCard
              bgCover={bgCover}
              userAvatar={userImage}
              user={user}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PostDescription);
