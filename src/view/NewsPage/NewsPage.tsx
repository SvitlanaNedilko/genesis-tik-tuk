import React, { useState, useEffect } from 'react'
import { getNewPosts } from '../../servises/servises'
import { NewsCard } from '../../components/newsCard/NewsCard'
import Pagination from '@mui/material/Pagination'
import './NewsPage.scss'
import { ReactComponent as LoaderIcon } from '../../assets/loading.svg'
import { toast } from 'react-toastify'

export default function NewsPage() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  const onPageChange = (page = 1) => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
    setLoading(true)
    setPage(page)
    getNewPosts(page)
      .then((response) => {
        if (response.length === 0) {
          throw new Error()
        }
        setPosts(response)
        setLoading(false)
      })
      .catch(() => {
        toast.error('Something went wrong, refresh the page or try again later')
        setLoading(false)
      })
  }

  useEffect(() => {
    onPageChange()
  }, [])

  return loading ? (
    <LoaderIcon className="Loader" />
  ) : (
    <>
      <ul className="Feeds-List">
        {posts?.length > 0 &&
          posts.map((post) => <NewsCard key={post.id} post={post} />)}
      </ul>
      {posts?.length > 0 && (
        <div className="Pagination-wrapper">
          <Pagination
            count={100}
            page={page}
            color="primary"
            onChange={(_, page) => {
              onPageChange(page)
            }}
          />
        </div>
      )}
    </>
  )
}
