import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import axios from "axios";
import bgImage from "../theme/assets/img/bg5.jpg";
import userImage from "../theme/assets/img/user-icon2.png";

export interface IValues {
  [key: string]: any;
}

export interface IState {
  id: number;
  post: any;
  user: any;
}

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
      }
    };
  }

  public componentDidMount(): void {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
      .then(data => {
        this.setState({ post: data.data });

        return axios.get(
          `https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`
        );
      })
      .then(data => {
        this.setState({ user: data.data });
      });
  }

  public render() {
    const post = this.state.post;
    const user = this.state.user;
    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h5 className="title">{post.title}</h5>
              </div>
              <div className="card-body">
                <p>{post.body}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-user">
              <div className="image">
                <img src={bgImage} alt="..." />
              </div>
              <div className="card-body">
                <div className="author">
                  <a href="#">
                    <img
                      className="avatar border-gray"
                      src={userImage}
                      alt="..."
                    />
                    <h5 className="title">{user.name}</h5>
                  </a>
                  <p className="description">{user.email}</p>
                </div>
                <p className="description text-center">
                  Works for {user.company.name} <br />
                  {user.company.catchPhrase} <br />
                </p>
              </div>
              <hr />
              <div className="button-container">
                {user.address.street}, {user.address.suite}, {user.address.city}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PostDescription);
