import React from 'react'

const LikePostHOC = (props) => {
    let {count,IncrementCount} =props;
    return (
    <div>
      <button onClick={IncrementCount}>
        Like Post {count}
      </button>
    </div>
)
}

export default LikePostHOC
