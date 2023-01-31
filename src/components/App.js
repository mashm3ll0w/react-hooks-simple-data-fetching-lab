import React, {useState, useEffect} from "react"


function App(){
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
      setImage(data.message)
    })
  }, [])

  if (!image){
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <img alt="A Random Dog" src={image}/>
    </div>
  )
}


export default App
