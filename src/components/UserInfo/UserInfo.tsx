import React from 'react'
import './UserInfo.scss'

interface IUserInfoProps {
  userInfo: IUserInfo
}

export const UserInfo: React.FC<IUserInfoProps> = ({ userInfo }) => {
  return userInfo.user ? (
    <div className="User-Info">
      <img
        className="User-Info-Avatar"
        src={userInfo.user.avatarMedium}
        width="200"
        height="200"
        alt={`avatar ${userInfo.user.nickname}`}
      />
      <div className="Info-wrapper">
        <h1>{userInfo.user.nickname}</h1>
        <h2>{userInfo.user.uniqueId}</h2>
        <p>following:{userInfo.stats.followingCount}</p>
        <p>follower:{userInfo.stats.followerCount}</p>
        <p>likes:{userInfo.stats.heartCount}</p>
        <p>{userInfo.user.signature}</p>
      </div>
    </div>
  ) : null
}
