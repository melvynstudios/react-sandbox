import { useState} from 'react';
import MainHeader from './components/MainHeader';
import PostList from './components/PostList'

function App() {
  const [showModal, setModalVisable] = useState(false);

  function showModalHandler() {
    setModalVisable(true);
  }

  function hideModalHandler() {
		setModalVisable(false);
	}

  return (
    <>
      <MainHeader onNewPost={showModalHandler} />
      <main>
        <PostList showCreatePost={showModal} hideModalHandler={hideModalHandler} />
      </main>
    </>
  )
}

export default App;