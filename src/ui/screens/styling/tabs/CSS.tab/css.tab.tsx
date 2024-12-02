import React from 'react';
import './css.tab.css';
import { useCoreStore } from '@store';

export const CSS = () => {
  const isFollowing = useCoreStore((state) => state?.isFollowing);
  const handleFollowOnClick = useCoreStore((state) => state.follow);

  return (
    <div className="card">
      <div className="profile-info">
        <div className="avatar" />
        <div className="text-block">
          <p className="user">ITSector</p>
          <p className="handle">@CSS</p>
        </div>
      </div>
      <div className="follow-button" onClick={handleFollowOnClick}>
        <p className="follow-text">{isFollowing ? 'Unfollow' : 'Follow'}</p>
      </div>
    </div>
  );
};
