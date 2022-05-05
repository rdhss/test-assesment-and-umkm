import React from 'react'
import '../style/comment.css'
import Comment from './Comment'

const CommentList = () => {
  return (
    <div className='vh-100 mt-3 comment-main d-flex flex-column align-items-center'>
      <Comment quote="best fresh fruits i have been taste" name="ridho"/>
      <Comment quote="best fresh fruits i have been taste" name="ridho"/>
      <Comment quote="best fresh fruits i have been taste" name="ridho"/>
      <a href="#" className='text-dark mt-5 ms-4'>See more Comment</a>
    </div>
  )
}

export default CommentList