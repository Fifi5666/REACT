import React, { useEffect, useState } from 'react'
import List from '../components/board/List'
import * as boards from '../apis/boards'
// boards 라는 이름으로 객체를 지정한다

const ListContainer = () => {
    // 🧊 state
    const [boardList, setBoardList] = useState([])
    const [isLoading, setLoading] = useState(false)
    // 🌞 함수
    const getBoardList = async () => {
        // 로딩 시작
        setLoading(true)
        const response = await boards.list()
        const data = await response.data        //⭐boardList
        setBoardList(data) // 2. state 가 바뀌면서 update 되어 렌더링을 다시 한다.
        setLoading(false)
        // 로딩 끝

    }

    // ❓ hook
    useEffect( () => {
        getBoardList()  // 1. Mount 될 때 얘를 호출
    }, [])
  return (
    <>
        {/* 게시글 목록(우리가 만들어 놓은) */}
        {/* 어려워 */}
        <List boardList={boardList} isLoading={isLoading}/>
        {/* boardLsit 내려주기 */}
    </>
  )
}

export default ListContainer