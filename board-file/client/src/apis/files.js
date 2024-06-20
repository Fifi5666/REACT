import axios from 'axios'

// 업로드
export const upload = (FormData, headers) => axios.post(`/files`, FormData, headers)

// 다운로드
export const download = (no) => axios.get(`/files/${no}`, {responseType: 'blob'})
// 응답 타입을 blob 으로 받아야 한다. 바디가 아니라 헤더(겟 방식은 바디가 없다)

// 파일 삭제
export const remove = (no) => axios.delete(`/files/${no}`)
// no라고 써도 상관없음 컨테이너에서는 구분이 안돼서 파일넘버라고 썼음

// 파일 선택 삭제
export const removeFiles = (fileNos) => axios.delete(`/files?no=${fileNos}`)