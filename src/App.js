import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {


  // const getData=()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/todos/').then(res=>{
  //     console.log(res.data);
  //     setList(res?.data?.data)
  //     console.log(list)
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // }

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/').then((res) => {
      console.log(res.data)
      // setList(res.json().data)
      // console.log(list.userId)
    }).catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <table className="table">
          <thead>
            <tr className='table-info'>
              <th scope="col">userId</th>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">completed</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 && list.map((item) => {
              <tr className='table-info'>
                <th scope="row">{item.userId}</th>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
              </tr>
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
