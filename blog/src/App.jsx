import './App.css'

// JS 객체로서 HTML을 생성하여 로드하는 메커니즘
function App() {
  // Binding용 데이터
  let post = '마포 라멘 맛집';

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
      {/* {}문법으로  데이터 Binding 가능*/}
      <h4>{post}</h4>
    </div>
  )
}
export default App
