import React from 'react'

const LikeImageHOC = (props) => {
    let {count,IncrementCount} =props
    return (
    <div>
      <button onClick={IncrementCount}>
        Like Image {count}
      </button>
    </div>
  )
}

export default LikeImageHOC
