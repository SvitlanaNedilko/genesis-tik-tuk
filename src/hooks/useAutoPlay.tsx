import { RefObject, useEffect, useMemo, useState } from 'react'

const useAutoPlay = (
  options: IntersectionObserverInit,
  targetRef: RefObject<HTMLVideoElement>
) => {
  const [isVisibile, setIsVisible] = useState<boolean>()

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const optionsMemo = useMemo(() => {
    return options
  }, [options])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo)
    const currentTarget = targetRef.current
    if (currentTarget) observer.observe(currentTarget)

    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [targetRef, optionsMemo])

  return isVisibile
}

export default useAutoPlay
