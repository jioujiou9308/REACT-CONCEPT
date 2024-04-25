import React, { useEffect, useState } from 'react'

const Post = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // resolve problem
        let isCancelled = false
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                if (!isCancelled) {
                    // add alert
                    alert('posts are ready,updating state')
                    setPosts(data)
                    // add console.log
                    console.log('data', data)
                }
            })
        return () => {
            // resolve problem
            isCancelled = true
        }
    }, [])
    console.log(posts)
    return (
        <div>{posts.map((p) => {
            return <p key={p.id}>{p.title}</p>
        })
        }</div>
    )
}

export default Post

/* 
在慢速的情況下，如果從別的頁面點進來(這裡設定從 effectMistic/post/linkToPost)，然後我們又返回上一個頁面，照理來說應該要取消alert並且，console的data也不應該抓到資料，但是卻不是這樣，因為我們沒有取消這個useEffect，所以即使返回上一頁，本頁fetch 與 console.log(data)還是會繼續運作
*/