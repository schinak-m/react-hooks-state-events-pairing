import React from 'react'
import { useState } from 'react'

const DownVoteButton = ({downvotes}) => {
    const [votes, setVotes] = useState(downvotes)

    const decrement = () => {
      setVotes((votes) => votes - 1)
    }
  
    return (
      <>
        <button onClick={decrement}>{votes}</button>
      </>
    )
}

export default DownVoteButton
