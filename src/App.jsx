import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import { Header_ } from './assets/Component/pages/header_'
import { MyContext } from './assets/Component/hooks/context'
import { BounceLoader_ } from './assets/Component/helpers/loader'

function App() {
  const [name, setname] = useState({ name: "ranjan", age: 23 })
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => setShowLoader(false), 2500)
    }

    if (document.readyState === 'complete') {
      handlePageLoad()
    } else {
      window.addEventListener('load', handlePageLoad)
      return () => window.removeEventListener('load', handlePageLoad)
    }
  }, [])

  return (
    <AnimatePresence>
      {showLoader ? (
        <motion.div
          className="loader-container"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          <BounceLoader_ />
        </motion.div>
      ) : (
        <MyContext.Provider value={{ name, setname }}>
          <Header_ />
        </MyContext.Provider>
      )}
    </AnimatePresence>
  )
}

export default App