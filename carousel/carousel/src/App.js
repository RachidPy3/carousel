import React, { useState } from "react"

function App() {
  const [index, setIndex] = useState(0)
  const imgArr = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fZ3S76FcivMLHuqmDcTmqQPhiNsrXSVMzf9FZSJ_&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQqcurtvMOaBOikj5VY40WSODJpdLXNYp2bkHIlBs&s"]

  const goNext = ()=>{
    setIndex(prev => prev === imgArr.length - 1 ? 0 : prev + 1)
  }

  const goPrev = ()=>{
    setIndex(prev => prev === 0 ? imgArr.length - 1 : prev - 1)
  }

  return (
    <div className="App">
      <button onClick={goPrev}>Previous</button>
      <img src={imgArr[index]} alt="pic" />
      <button onClick={goNext}>Next</button>
    </div>
  );
}

export default App;
