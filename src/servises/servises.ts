import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import userFeed from '../user-feed.json'

const options: AxiosRequestConfig = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
  },
}

export function getNewPosts(page = 1) {
  return axios
    .request({
      ...options,
      url: `https://tiktok33.p.rapidapi.com/trending/feed?limit=30&page=${page}`,
    })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw new Error(error)
    })
}

export function getUserInfo(name: string): Promise<IUserInfo> {
  return axios
    .request({
      ...options,
      url: `https://tiktok33.p.rapidapi.com/user/info/${name}`,
    })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      throw new Error(error)
    })
}

export function getUserFeeds(name: string, page = 1): Promise<IPost[]> {
  const LIMIT = 6
  const maxIndex = LIMIT * page
  const minIndex = LIMIT * page - LIMIT
  return new Promise((resolve) => {
    resolve(
      (userFeed as Record<string, any>).itemList.slice(minIndex, maxIndex)
    )
  })
}
