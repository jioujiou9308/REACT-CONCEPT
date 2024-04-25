import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

function UserPage() {
    const [user, setUser] = useState({});
    const router = useRouter();
    const { id5 } = router.query;

    useEffect(() => {

        // error method
        fetch(`https://jsonplaceholder.typicode.com/users/${id5}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            })


        // correct version
        // const controller = new AbortController();
        // const signal = controller.signal;
        // fetch(`https://jsonplaceholder.typicode.com/users/${id5}`, { signal })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setUser(data);
        //     }).catch((err) => {
        //         if (err.name === 'AbortError') {
        //             console.log('cnacelled~~~~~~~~~~~~~~~~');
        //             return;
        //         }
        //     });
        // return () => {
        //     controller.abort();
        // }


        // axios version 
        /*  const cancelToken = axios.CancelToken.source();
         axios.get(`https://jsonplaceholder.typicode.com/users/${id5}`, { cancelToken: cancelToken.token })
         .then((res) => { 
             setUser(res.data);
         }).catch((err) => {
             if (axios.isCancel(err)) {
                 console.log('cnacelled~~~~~~~~~~~~~~~~');
                 return;
             }
         });
         return () => {
             cancelToken.cancel();
         } */

    }, [id5]);


    return (
        <div>
            <h1>User ID: {id5}</h1>
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
在這第五個範例中，我們再次看到當使用useEffect的時候如果不取消訂閱會發生什麼事
我們根據Link連結不同的url並且改變id時，useEffect會fetch對應id的資料
在測試的時候，當我們點擊user2時，並接者快速的點擊user3
你會發現user2的資料會先顯示，然後才顯示user3的資料，這不是一個好現象

為了解決這個現象，我們一樣可以使用範例4的方式
或者使用更專業的方法來 


*/