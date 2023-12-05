import Indicator from '../Indicator/Indicator'

interface AvatarProps {
  avatar?: string
  initial?: string
  alt?: string
  indicator?: 'online' | 'offline' | 'away'
}

const Avatar = ({ avatar, initial, alt, indicator }: AvatarProps) => {
  return (
    <div className="avatar">
      {avatar && (
        <img src={avatar} alt={alt} className="avatar-img avatar-style" />
      )}
      {initial && !avatar && (
        <div className="avatar-initial avatar-style center">{initial}</div>
      )}
      {indicator && (
        <div className="indicator">
          <Indicator status={indicator} />
        </div>
      )}
    </div>
  )
}

export default Avatar
