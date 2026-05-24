import { useState } from 'react'

function Card({ title, description }) {
  const [likes, setLikes] = useState(0)

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setLikes(likes + 1)}>
        ❤️ Likes {likes}
      </button>
    </div>
  )
}

export default Card