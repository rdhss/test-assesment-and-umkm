import React from 'react'
import '../style/comment.css'

const Comment = ({quote, name}) => {
  return (
    <figure class="ms-4 text-center comment-card d-flex justify-content-center mt-4 flex-column">
      <blockquote class="blockquote">
        <p>{quote}</p>
      </blockquote>
      <figcaption class="blockquote-footer">
         <cite title="Source Title">{name}</cite>
      </figcaption>
    </figure>
  )
}

export default Comment