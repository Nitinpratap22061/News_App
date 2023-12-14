import { useState } from "react"
import Navbar from "./component/Navbar"
import NewsBoard from "./component/NewsBoard"




const App = () => {
  const [category,setcategory]=useState("sports")
  return (
    <div>
     <Navbar setcategory={setcategory} />
     <NewsBoard category={category}/>
    
    
    </div>
  )
}

export default App
