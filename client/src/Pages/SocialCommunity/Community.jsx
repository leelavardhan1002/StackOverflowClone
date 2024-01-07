import React from 'react';

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import PostPage from '../../components/Posts/PostPage';

import './Community.css';

const Community = () => {
  return (
    <>
    <LeftSidebar />
    <div className='home-container-4'>
      <div className='home-container-3'>
        <PostPage />
      </div>
    </div>
    </>
  )
}

export default Community;
