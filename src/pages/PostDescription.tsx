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
  isUserLoading: Boolean;
  isPostLoading: Boolean;
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
      isPostLoading: false,
      isUserLoading: false
    };
  }

  public componentDidMount(): void {
    this.setState({ isPostLoading: true, isUserLoading: true });
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
      .then(data => {
        this.setState({ post: data.data, isPostLoading: false });

        return axios.get(
          `https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`
        );
      })
      .then(data => {
        this.setState({
          user: data.data,
          isUserLoading: false
        });
      });
  }

  public render() {
    const { post, user, isPostLoading, isUserLoading } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <PostDetailCard post={post} isLoading={isPostLoading} />
          </div>
          <div className="col-md-4">
            <UserProfileCard
              bgCover={bgCover}
              userAvatar={userImage}
              user={user}
              isLoading={isUserLoading}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PostDescription);
