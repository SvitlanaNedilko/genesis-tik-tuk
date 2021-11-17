interface IAuthorMeta {
  id: string
  name: string
  nickName: string
  avatar: string
}

interface ICovers {
  default: string
  origin: string
  dynamic: string
}

interface IHashtag {
  id: string
  name: string
}

interface IStats {
  followerCount: number
  followingCount: number
  heartCount: number
  playCount: number
}

declare interface IPost {
  id: string
  text: string
  videoUrl: string
  diggCount: number
  playCount: number
  commentCount: number
  authorMeta: IAuthorMeta
  covers: ICovers
  hashtags: IHashtag[]
}

declare interface IUser {
  id: string
  uniqueId: string
  authorMeta: IAuthorMeta
  nickname: string
  avatarMedium: string
  signature: string
}

declare interface IUserInfo {
  user: IUser
  stats: IStats
}
