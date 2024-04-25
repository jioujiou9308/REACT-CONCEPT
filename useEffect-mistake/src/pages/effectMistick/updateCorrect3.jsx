import React, { useEffect, useState } from 'react'

const UpdateCorrect = () => {
  const [count, setCount] = useState(0)

  // * error situation1
  /*   useEffect(() => {
      console.log('useEffect runs!')
      setInterval(() => {
        setCount(count + 1)
      }, 1000)
    }, [number]) */

  // error situation 2
  // 雖然不使用clean function 但是在不更新頁面的情況下，不會有問題，但這是隱藏地雷
  // useEffect(() => {
  //   console.log('useEffect runs!')
  //   setInterval(() => {
  //     setCount(prev => prev + 1)
  //   }, [1000])
  // }, [])

  // correct sitiuation
  useEffect(() => {
    console.log('useEffect runs!')
    const interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, [1000])
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div>{count}</div>
  )
}

export default UpdateCorrect

/* 
這個使用useEffect來每秒計時，看似沒問題，但是只要number是這個useEffect的依賴向，所以每當number改變就會一次又一次的運行此函數，所以會看到頁面上的數字不斷地跳動，
要解決這個問題，應該要使用更新函數，而不是使用狀態變量本身
所以我們改變成使用situation 2的寫法
這樣看似沒問題了，畫面渲染後，指運行了一次setInterval，重點是setCount(prev + 1)
使其運行成功
但這樣又會有一個問題，如果你在文中改變了內容，那麼你又會看到數字開始改變，因為原先的計時器還在運作，因為更改內容，重新渲染，又產生的新的setInterval

這正是react 嚴格模式如此重要的地方

有have strick model or not
1. not have strick model
  當沒有strick model 的時候我們使用setCount(prev => prev + 1) ，並且在沒有隨意更新頁面的狀況下，他是不會產生錯誤的，但如我我們沒有發現這樣的錯誤，很有可能會導致未知的錯誤發生
2. have strick model
  在嚴格模式下就算我們使用了setCount(prev => prev + 1)，我們發現數字會從2的倍數開始，這也就是為什麼嚴格模式存在的原因
  




*/