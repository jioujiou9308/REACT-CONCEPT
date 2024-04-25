import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

function UserPage() {
    const [user, setUser] = useState({});
    const router = useRouter();
    const { id6 } = router.query;

    useEffect(() => {
        console.log('useEffect mounts')
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(`https://jsonplaceholder.typicode.com/users/${id6}`, { signal })
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            }).catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('cnacelled~~~~~~~~~~~~~~~~');
                    return;
                }

            });
        return () => {
            console.log('useEffect unmounts')
            controller.abort();
        }


    }, [id6]);


    return (
        <div>
            <h1>User ID: {id6}</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <Link href={'1'}>FETCH USER 1</Link>
            <br />
            <Link href={'2'}>FETCH USER 2</Link>
            <br />
            <Link href={'3'}>FETCH USER 3</Link>
        </div>
    );
}

export default UserPage;

/* 
我可以測試當取消嚴格模式的時候，只會觸發一次，並只看到產生的
        console.log('useEffect mounts')
但當我們恢復嚴格模式時
useEffect mounts
useEffect unmounts
useEffect mounts
cancelled~~~~~~~~~~~~~~~~

1. 只在開發者模式發生
2. 並非bug
3. 再回到 updateCorrect3的範例
*/