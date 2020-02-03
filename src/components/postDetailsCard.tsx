import React from 'react';
import Card from './card';
import Loader from './loader';

interface IProps {
  post: any;
  isLoading: Boolean;
}

const PostDetailsCard = ({ post, isLoading }: IProps) => {
  if (isLoading) {
    return (
      <div>
        <Card title="Loading...">
          <Loader />
        </Card>
      </div>
    );
  }

  return (
    <Card title={post.title}>
      <p>{post.body}</p>
    </Card>
  );
};

export default PostDetailsCard;
