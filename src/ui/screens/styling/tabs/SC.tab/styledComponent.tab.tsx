import React from 'react';
import { StyledComponents } from './styledComponent.components';
import { useCoreStore } from '@store';

export const SC = () => {
  const isFollowing = useCoreStore((state) => state?.isFollowing);
  const handleFollowOnClick = useCoreStore((state) => state.follow);
  const { ProfileCard, ProfileInfo, Avatar, TextBlock, User, Handle, FollowButton, FollowText } = StyledComponents;
  return (
    <ProfileCard>
      <ProfileInfo>
        <Avatar />
        <TextBlock>
          <User>ITSector</User>
          <Handle>@JuniFEUP</Handle>
        </TextBlock>
      </ProfileInfo>
      <FollowButton onClick={handleFollowOnClick}>
        <FollowText>{isFollowing ? 'Unfollow' : 'Follow'}</FollowText>
      </FollowButton>
    </ProfileCard>
  );
};
