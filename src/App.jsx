import Card from './components/Card'
import HomeNaomi from './naomi/pages/HomeNaomi'

function App() {
  return (
    <main>
      <h1>🎬 CineSpoilerSS</h1>

      <Card
        title="Sheila Diaz Rojas"
        description="Frontend Developer"
      />

      <Card
        title="CineSpoilerSS"
        description="Cinema ticket e-commerce built with React."
      />

      <HomeNaomi />
    </main>
  )
}

export default App
