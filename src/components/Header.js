import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { duration: 1 },
}

const Header = ({
  filterKeywords,
  removeAllFilterKeywords,
  removeFilterKeyword,
}) => {
  return (
    <header className='header'>
      {filterKeywords.length !== 0 ? (
        <div className='module'>
          <ul>
            <AnimatePresence>
              {filterKeywords.map((item) => {
                return (
                  <motion.li
                    variants={itemVariants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    key={item}
                  >
                    {item}{' '}
                    <span onClick={(e) => removeFilterKeyword(item)}>X</span>
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ul>
          <button onClick={() => removeAllFilterKeywords()} className='btn'>
            Clear
          </button>
        </div>
      ) : (
        <></>
      )}
    </header>
  )
}

export default Header
