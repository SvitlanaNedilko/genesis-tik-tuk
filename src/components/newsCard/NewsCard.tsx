import React from 'react'
import { Link } from 'react-router-dom'
import { VideoComponent } from '../videoComponent/VideoComponent'
import './NewsCard.scss'

interface IFeedCardProps {
  post: IPost
}

export const NewsCard: React.FC<IFeedCardProps> = ({ post }) => {
  return (
    <li key={post.id} className="Feed-Card">
      <div className="Feed-Card-Info">
        <div className="User-Section">
          <Link to={`/genesis-tik-tuk/${post.authorMeta.name}`}>
            <img
              className="User-Section-Avatar"
              src={post.authorMeta.avatar}
              width="100"
              height="100"
              alt={`avatar ${post.authorMeta.name}`}
            />
          </Link>
          <div className="User-Section-Info">
            <Link to={`/genesis-tik-tuk/${post.authorMeta.name}`}>
              <h2 className="User-Section-Info-Name">{post.authorMeta.name}</h2>
            </Link>

            <p>{post.authorMeta.nickName}</p>
          </div>
        </div>
      </div>

      <VideoComponent post={post} />
      <div className="Description-Feed">
        <p className="Description-Feed-Text">{post.text}</p>
      </div>
    </li>
  )
}
