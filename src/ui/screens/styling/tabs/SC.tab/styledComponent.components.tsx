import styled from 'styled-components';

const ProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 24rem;
  height: 9rem;
  padding: 1.5rem;
  background-color: #27272a;
  border-radius: 0.75rem;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #a78bfa;
`;

const ProfileInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #7c3aed;
  border: 1px solid #a78bfa;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
`;

const Handle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.75rem;
`;

const FollowButton = styled.div`
  width: 6rem;
  height: 2.5rem;
  background-color: #7c3aed;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6d28d9;
  }
`;

const FollowText = styled.p`
  font-weight: bold;
`;

export const StyledComponents = {
  ProfileCard,
  ProfileInfo,
  Avatar,
  TextBlock,
  User,
  Handle,
  FollowButton,
  FollowText,
};
