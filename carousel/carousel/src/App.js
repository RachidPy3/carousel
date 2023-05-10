import React, { useState } from "react"

function App() {
  const [index, setIndex] = useState(0)

  const cardArr = [{
    name: "pic 1",
	url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  }, {
	name: "pic 2",
	url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fZ3S76FcivMLHuqmDcTmqQPhiNsrXSVMzf9FZSJ_&s"
  },{
	name: "pic 3",
	url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQqcurtvMOaBOikj5VY40WSODJpdLXNYp2bkHIlBs&s"
  }]

  const goNext = ()=>{
    setIndex(prev => prev === cardArr.length - 1 ? 0 : prev + 1)
  }

  const goPrev = ()=>{
    setIndex(prev => prev === 0 ? cardArr.length - 1 : prev - 1)
  }

  return (
    <div className="App">
      <button onClick={goPrev}>Previous</button>
      <div className="card">
		<p>{cardArr[index].name}</p>
        <img src={cardArr[index].url} alt="pic" />
      </div>
      <button onClick={goNext}>Next</button>
    </div>
  );
}

export default App;
