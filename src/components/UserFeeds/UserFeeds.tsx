import React from 'react'
import { VideoComponent } from '../videoComponent/VideoComponent'
import './UserFeeds.scss'
import PlaceHolderImage from '../../assets/tik-tok.jpg'
import { ReactComponent as ViewsIcon } from '../../assets/views.svg'

interface IUserFeedsProps {
  userFeeds: IPost[]
}

export const UserFeeds: React.FC<IUserFeedsProps> = ({ userFeeds }) => {
  return userFeeds ? (
    <ul className="User-Feeds-List">
      {userFeeds.map((feed) => (
        <li className="User-Feed-Item" key={feed.id}>
          <div className="Views-information">
            <ViewsIcon className="Count-Icon" />
            <p className="Count-Number">{feed.stats.playCount}</p>
          </div>
          <VideoComponent
            post={{
              ...feed,
              covers: { origin: PlaceHolderImage, default: '', dynamic: '' },
            }}
            hideInfo
          />
        </li>
      ))}
    </ul>
  ) : null
}
