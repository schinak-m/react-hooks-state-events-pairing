import React from 'react'
import { useState } from 'react'

const UpVoteButton = ({upvotes}) => {
  const [votes, setVotes] = useState(upvotes)

  const increment = () => {
    setVotes((votes) => votes + 1)
  }

  return (
    <>
      <button onClick={increment}>{votes}</button>
    </>
  )
}

export default UpVoteButton
