import React from 'react';
import Loader from './loader';
import { Link } from 'react-router-dom';
import Card from './card';

interface IProps {
  posts: any[];
  isLoading: Boolean;
}

const PostList = ({ posts, isLoading }: IProps) => {
  if (isLoading) {
    return (
      <div>
        <Card title="Posts">
          <Loader />
        </Card>
      </div>
    );
  }
  if (posts.length === 0) {
    return (
      <div>
        <h4>No Posts To Display</h4>
      </div>
    );
  }
  return (
    <div>
      <Card title="Posts">
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
      </Card>
    </div>
  );
};

export default PostList;
