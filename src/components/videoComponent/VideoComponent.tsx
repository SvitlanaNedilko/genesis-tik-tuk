import { useRef, useEffect } from 'react'
import useAutoPlay from '../../hooks/useAutoPlay'
import { ReactComponent as CommentIcon } from '../../assets/comment.svg'
import { ReactComponent as LikeIcon } from '../../assets/like.svg'
import { ReactComponent as ViewsIcon } from '../../assets/views.svg'
import { calculator } from '../../utils/helpers'
import './VideoComponent.scss'

interface IVideoComponentProps {
  post: IPost
  hideInfo?: boolean
}

export const VideoComponent: React.FC<IVideoComponentProps> = ({
  post,
  hideInfo,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playRef = useRef<any>(null)
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  }

  const isVisible = useAutoPlay(options, videoRef)

  useEffect(() => {
    if (isVisible) {
      playRef.current = videoRef.current!.play()
    } else {
      if (playRef.current != null) {
        playRef.current.then(() => {
          videoRef.current!.pause()
        })
      }
    }
  }, [isVisible])

  return (
    <div className="Video-wrapper">
      <video
        className="Feed-Video"
        width={250}
        height={440}
        loop
        poster={post.covers.origin}
        ref={videoRef}
        preload="none"
        muted
      >
        <source src={post.videoUrl} />
      </video>
      {!hideInfo && (
        <ul className="Counts">
          <li>
            <LikeIcon className="Count-Icon" />
            <p className="Count-Number">{calculator(post.diggCount)}</p>
          </li>
          <li>
            <ViewsIcon className="Count-Icon" />
            <p className="Count-Number">{calculator(post.playCount)}</p>
          </li>
          <li>
            <CommentIcon className="Count-Icon" />
            <p className="Count-Number">{calculator(post.commentCount)}</p>
          </li>
        </ul>
      )}
    </div>
  )
}
