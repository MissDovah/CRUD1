import React, { useEffect, useState } from 'react'
import Comment from "../Comment/Comment"

const CommentList = () => {

    const [data, setData] = useState([])

    const fetchBooks = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data)
            });
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <div id="comment-list-container">
            comment list
            {
                data.map((item) => {
                    return (
                        <>
                            {/* <h1>{item.title}</h1>
                            <h3>{item.body}</h3> */}
                            <Comment item={item} />
                        </>

                    )
                })
            }
        </div>

    )
}

export default CommentList;