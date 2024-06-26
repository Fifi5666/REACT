// import React, { useEffect, useState } from 'react';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch("http://127.0.0.1:8080/products/");
//       const data = await response.json();
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id}>{product.name}</div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;

import React, { useEffect, useState } from 'react'
import Product from './Product'

const Productlist = () => {
  // 🧊 state : list
  const [list, setList] = useState([])

    // ❓ hook : userEffect ()
    // ⭐ useEffect :  아래 세가지 라이프 사이클 메소드를 결합한 리액트 훅
    // ✅ hook : 리액트의 함수형 컴포넌트가 가지는 특별한 의미의 함수
    // conponentDidMount    1️⃣
    // componentDidUpdate   2️⃣
    // componentWillUnmount
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch("http://localhost:8080/products/")
          const data = await response.json()
          setList(data)   // list state 를 업데이트 -> componentDidUpdate
          console.log(data)
        } catch (error) {
          console.log(error)
        }
      }
    fetchData()
  }, [])
  
  return (
    // <div>Productlist</div>
    
      <div className="container">
        <h1>상품 목록</h1>
        <div className="card-list">
          {list.map((product, index) => {
            return <Product product={product} key={product.no}  />
            })
          }
        </div>
      </div>
    
  )
}

export default Productlist