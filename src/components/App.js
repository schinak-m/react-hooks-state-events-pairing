import video from "../data/video.js";
import UpVoteButton from "./UpVoteButton.jsx";
import DownVoteButton from "./DownVoteButton.jsx";
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);

  const [showComments, setShowComments] = useState(true)

  const toggleComments = () => {
    setShowComments((showComments) => !showComments)
  }

  const comments = video.comments.map((comment) => (
    <div key={comment.id}>
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
    </div>
  ))

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <div>
        <h1>React Today and Tomorrow and 90% Cleaner React With Hooks</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <UpVoteButton upvotes={video.upvotes} />
        <DownVoteButton downvotes={video.downvotes} /> <br />
        <button onClick={toggleComments}>{showComments ? 'Hide Comments' : 'Show Comments'}</button>
        <hr />
        <h2>{comments.length} Comments</h2>
        {showComments && comments}
      </div>
    </div>
  );
}

export default App;
