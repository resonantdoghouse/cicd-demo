import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import ItemList from './components/ItemList'
import './App.css'

const test = 123;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>My React Testing Demo</h1>
        <p className="read-the-docs">
          A showcase of React components and testing practices.
        </p>
      </header>
      
      <main>
        <section>
          <Greeting name="Demo User" />
        </section>

        <section style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <Counter initialValue={10} />
            
            <div className="card" style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>Vite Native Counter</p>
              <button onClick={() => setCount((count) => count + 1)} style={{ marginTop: '10px' }}>
                count is {count}
              </button>
            </div>
          </div>
          
          <div style={{ flex: '1 1 300px' }}>
            <ItemList />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

