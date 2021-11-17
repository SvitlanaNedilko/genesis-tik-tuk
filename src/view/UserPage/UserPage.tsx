import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserInfo } from '../../components/UserInfo/UserInfo'
import { UserFeeds } from '../../components/UserFeeds/UserFeeds'
import { getUserInfo, getUserFeeds } from '../../servises/servises'
import './UserPage.scss'
import { Pagination } from '@mui/material'
import { ReactComponent as LoaderIcon } from '../../assets/loading.svg'
import { toast } from 'react-toastify'

export default function UserPage() {
  const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo)
  const [userFeeds, setUserFeeds] = useState<IPost[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  const { name } = useParams()

  const onPageChange = (page = 1) => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
    setPage(page)
    setLoading(true)
    getUserFeeds(userInfo.user.uniqueId, page).then((response) => {
      setUserFeeds(response)
      setLoading(false)
    })
  }

  useEffect(() => {
    setLoading(true)
    const infoPromise = getUserInfo(name as string)
    const feedsPromise = getUserFeeds(name as string)
    Promise.all([infoPromise, feedsPromise])
      .then(([valueInfo, valueFeeds]) => {
        setUserInfo(valueInfo)
        setUserFeeds(valueFeeds)
        setLoading(false)
      })
      .catch(() => {
        toast.error('Something went wrong, refresh the page or try again later')
        setLoading(false)
      })
  }, [name])

  return loading ? (
    <LoaderIcon className="Loader" />
  ) : (
    <>
      <UserInfo userInfo={userInfo} />
      <UserFeeds userFeeds={userFeeds} />
      {userFeeds?.length > 0 && (
        <div className="Pagination-wrapper">
          <Pagination
            count={10}
            color="primary"
            page={page}
            onChange={(_, page) => {
              onPageChange(page)
            }}
          />
        </div>
      )}
    </>
  )
}
