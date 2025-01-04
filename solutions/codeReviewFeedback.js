import React, { useState } from "react";

const FeedbackSystem = () => {
  const [votes, setVotes] = useState([
    { upvotes: 0, downvotes: 0 },
    { upvotes: 0, downvotes: 0 },
    { upvotes: 0, downvotes: 0 },
    { upvotes: 0, downvotes: 0 },
    { upvotes: 0, downvotes: 0 },
  ]);

  const handleVote = (index, type) => {
    setVotes((prevVotes) =>
      prevVotes.map((vote, idx) =>
        idx === index
          ? {
              ...vote,
              [type]: vote[type] + 1,
            }
          : vote
      )
    );
  };

  const aspects = [
    "Readability",
    "Performance",
    "Security",
    "Documentation",
    "Testing",
  ];

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {aspects.map((aspect, index) => (
          <div key={aspect} className="pa-10 w-300 card">
            <h2>{aspect}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid={`upvote-btn-${index}`}
                onClick={() => handleVote(index, "upvotes")}
              >
                👍 Upvote
              </button>

              <button
                className="py-10 px-15 danger"
                data-testid={`downvote-btn-${index}`}
                onClick={() => handleVote(index, "downvotes")}
              >
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
              Upvotes: <strong>{votes[index].upvotes}</strong>
            </p>
            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
              Downvotes: <strong>{votes[index].downvotes}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
