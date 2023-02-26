import {Channelbar} from './components/ChannelBar';
import {ContentContainer} from './components/ContentContainer';
import {Sidebar} from './components/SideBar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default App;
