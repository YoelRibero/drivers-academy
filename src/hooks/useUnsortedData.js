import { useState, useEffect } from 'react'

export const useUnsortedData = (data) => {
  const [unsortedData, setUnsortedData] = useState([])

  useEffect(() => {
    setUnsortedData(data.map(question => {
      const random = Math.floor(Math.random() * (100 - 1)) + 1
      return { order: random, question }
    }).sort((a, b) => {
      return a.order > b.order ? 1 : -1
    }))
  }, [])

  return unsortedData
}
