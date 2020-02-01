import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import axios from "axios";

interface IState {
  posts: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { posts: [] };
  }

  public componentDidMount(): void {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      this.setState({ posts: data.data });
    });
  }

  public render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.length === 0 && (
          <div className="text-center">
            <h2>No customer found at the moment</h2>
          </div>
        )}
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title"> Posts</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>Post Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts &&
                        posts.map(post => (
                          <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>
                              <Link to={`post/${post.id}`}>{post.title}</Link>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
