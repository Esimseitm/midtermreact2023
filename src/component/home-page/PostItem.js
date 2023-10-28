import React from 'react';

const PostItem = (props) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <stron>{props.post.id}. {props.post.title}</stron>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Delete</button>

                </div>
            </div>
        </div>
    );
};

export default PostItem;