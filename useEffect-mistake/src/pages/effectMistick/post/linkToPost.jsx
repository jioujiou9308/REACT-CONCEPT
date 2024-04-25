import React from 'react'
import Link from 'next/link'

const LinkToPost = () => {
    return (
        <div>
            <Link href={'/effectMistick/post/post'}>go post</Link>
        </div>
    )
}

export default LinkToPost