import { React } from 'react'

const Comment = ({item}) => {
    return (
        <div id="comment-container">
        Comment
          {/* <h1>{item.title}</h1>  */}
          <h3>{item.body}</h3>
        </div>

    )
}

export default Comment;
