import React from 'react';
import Card from './card';
import Loader from './loader';

interface IProps {
  bgCover: string;
  userAvatar: string;
  user: any;
  isLoading: Boolean;
}

const userProfileCard = ({ bgCover, userAvatar, user, isLoading }: IProps) => {
  if (isLoading) {
    return (
      <div>
        <Card title="Posts">
          <Loader />
        </Card>
      </div>
    );
  }

  return (
    <div className="card card-user">
      <div className="image">
        <img src={bgCover} alt="..." />
      </div>
      <div className="card-body">
        <div className="author">
          <a href="/">
            <img className="avatar border-gray" src={userAvatar} alt="..." />
            <h5 className="title">{user.name}</h5>
          </a>
          <p className="description">{user.email}</p>
        </div>
        <p className="description text-center">
          Works for
          {user.company.name}
          <br />
          {user.company.catchPhrase}
          <br />
        </p>
      </div>
      <hr />
      <div className="button-container">
        {user.address.street},{user.address.suite},{user.address.city}
      </div>
    </div>
  );
};

export default userProfileCard;
