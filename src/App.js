import Element from './components/Element'
import Header from './components/Header'
import React, { useState } from 'react'

function App() {
  const [filterKeywords, setfilterKeywords] = useState([])

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data])
    }
  }

  const removeFilterKeyword = (data) => {
    const newData = filterKeywords.filter((element) => element !== data)
    setfilterKeywords([...newData])
  }

  const removeAllFilterKeywords = () => {
    setfilterKeywords([])
  }

  return (
    <div className='App'>
      <Header
        filterKeywords={filterKeywords}
        removeAllFilterKeywords={removeAllFilterKeywords}
        removeFilterKeyword={removeFilterKeyword}
      />
      <Element
        addFilterKeywords={addFilterKeywords}
        filterKeywords={filterKeywords}
      />
    </div>
  )
}

export default App
