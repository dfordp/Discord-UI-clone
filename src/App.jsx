import "./index.css"
import Sidebar from "./components/SideBar"
import ChannelBar from "./components/ChannelBar"
import ContentContainer from "./components/ContentContainer"


function App() {

  return (
    <div>
        <Sidebar/>
        <ChannelBar/>
        <ContentContainer/>
    </div>
  )
}

export default App
