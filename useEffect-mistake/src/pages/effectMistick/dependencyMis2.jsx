import React, { useState, useEffect, useMemo } from 'react';

const DependencyMis = () => {
	const [name, setName] = useState('');
	const [state, setState] = useState({
		name: '',
		selected: false,
		age: 30,
		city: ''
	});
	console.count('render component');

	const user = useMemo(() => ({
		name: state.name,
		selected: state.selected,
	}), [state.name, state.selected])

	useEffect(() => {
		console.count('the state has changed,useEffect runs')
	}, [state.name, state.selected])

	const handleAdd = () => {
		setState(prev => ({ ...prev, name }))
	}
	const handleSelect = () => {
		setState(prev => ({ ...prev, selected: true }))
	}
	return (
		<div>
			<input text='text' onChange={(e) => setName(e.target.value)} style={{ border: 'solid' }} />
			<br />
			<button onClick={handleAdd}>Add Name</button>
			<button onClick={handleSelect}>Select</button>
			<br />
			{`{
        name:${state.name},
        selected:${state.selected.toString()}
      }`}
		</div>
	);
};

export default DependencyMis;

/* 
1. 還沒創建useEffect前，button的功能都正常，在網頁上也會因為add name的button改面name的顯示
2. 先增加一個useEffect，
useEffect(() => {
		console.log('the state has changed,useEffect runs')
	}, [state])
我們按下 add name按紐，下方的值會更新
再按一下select，因為false -> true，state也改變了所以在跑一次useEffect
但是，如果你案第二下 select按鈕，明明值都沒有變，為什麼又重新渲染，跑了一次useEffect
這是因為
★string, numbers and boolean are primitive 同樣的變數指向同樣的值，他們都會相等
but 
const x ={name:'john'}
const y ={name:'john'}
x與y是不相等，雖然內容物相同，但是你可以把他們看做只是裝了同樣物體的購物車
但如果 const z = y
那麼z === y 會是true，因問他們指向同一台購物車的概念
同理的如果是array的話  [] === []  會顯示false
解決這個方法就需要使用useMemo hook ，就可以解決這個狀況
單然依照這個簡單的範例，如果你的useEffect的 dependency 改成 [state.name , state.selected] 在這裡也是可以的
*/
