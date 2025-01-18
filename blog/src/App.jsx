import { useState } from 'react';
import './App.css'

// JS 객체로서 HTML을 생성하여 로드하는 메커니즘
function App() {
  // 1. import useState
  // 2. useState('메모리에 올릴 데이터')
  // 3. let[string, dispatch]
  // State는 데이터의 반응성을 유지해줌.(vue ref생각하면 될듯)
  let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState(0);

  return (
    // react 문법으로 Html Class 작성할 때 className이라는 property를 사용해야한다.
    // html문법으로 `class`라고 적게 될 시 JS Class로 컴파일 됨
    <div className='App'>
      <div className='black-nav'>
        {/* style적용도 {} 사용해서 할 것
          Json형식인듯
          style속성에서 사용되는 '-'hyphen은 사용하지 말것(뺄셈으로 취급됨)
            => camelCase 사용 */}
        <h4 style={{color: 'red', fontSize: '16px'}}>This is Blog</h4>
      </div>
      <div className='list'>
      <button onClick={() => {
          let copy = [...title];
          changeTitle(copy.sort());
        }
      }> 가나다순 정렬</button>
      <button onClick={() => {
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          changeTitle(copy);
        }
      }>글 수정</button>
      {/* {}문법으로  데이터 Binding 가능*/}
      {/* onClick 이벤트핸들러를 {안에 작성 가능} */}
      {/* like는 useState로 선언되어서 dispatch함수를 통해서 set해줘야함. */}
        <h4>{ title[0] } <span onClick={ () => { setLike(like++) } }> 👍 </span> { like } </h4>
        <p>1월 18일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>1월 18일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4>
        <p>1월 18일 발행</p>
      </div>
    </div>
    // `return`문 안에는 병렬로 Tag 2개이상 입력 금지.
    // 컴포넌트의 Root Tag는 하나만 존잰해야함.
    // <div></div>
  )
}
export default App
