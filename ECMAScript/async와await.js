
async function fetchData() {
    // fetch가 반환해주는 것이 Promise
    const response = await fetch('https://httpbin.org/get')
    // await를 안 하면 코드가 실행될 시점에 응답이 오지 않아 반환되는 값이 없다.
    // 쓰면 비동기 응답을 기다린다.
    console.log(response);
    // json 객체로 변환
    console.log(`뒤에 로그`);
    const data = await response.json()
    return data
    // 쓰지 않으려면 then을 이용해 콜백함수 사용해야 한다.
    // response.then((result) =>
    // console.log(result);
    // })
}

// const result = await fetchData()
// await 는 async 함수 안에서만 사용한다.
console.log("함수 바깥으로 데이터 가져옴...")
fetchData()
    .then((data) => {
        console.log(data)
    })

console.log(`async await 비동기 요청 처리`)