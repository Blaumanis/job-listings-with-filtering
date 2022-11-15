import data from '../data'
import React, {useState, useEffect} from 'react'

const Element = ({addFilterKeywords, filterKeywords}) => {

    const [filteredJobs, setFilteredJobs] = useState([])
  
    const filterElements = () => {
      if (filterKeywords) {
        const newJobs = data.filter((d) => {
          return filterKeywords.every((key) => {
            return d.tools.includes(key) || d.languages.includes(key) || d.role === key || d.level === key
          })
        })
        setFilteredJobs(newJobs)
      } else {
        setFilteredJobs(data)
      }
    }
  
    useEffect(() => {
      filterElements()
    }, [filterKeywords])

  return (
    <section className='elements-container'>
      {filteredJobs.map((element) => {
        const {
          id,
          company,
          logo,
          newPos,
          featured,
          position,
          role,
          level,
          postedAt,
          contract,
          location,
          languages,
          tools,
        } = element
        return (
          <article
            key={id}
            className={featured ? 'element ifFeatured' : 'element'}
          >
            <img src={logo} alt={company} />
            <div className='general-info'>
              <div className='first-line'>
                <p className='company'>{company}</p>
                <p className={newPos ? 'newPos' : ''}>{newPos ? 'NEW' : ''}</p>
                <p className={featured ? 'featured' : ''}>
                  {featured ? 'FEATURED' : ''}
                </p>
              </div>
              <div className='second-line'>
                <h4>{position}</h4>
              </div>
              <div className='third-line'>
                <p className='postedAt'>{postedAt}</p>
                <div className='dot'></div>
                <p className='contract'>{contract}</p>
                <div className='dot'></div>
                <p className='location'>{location}</p>
              </div>
            </div>
            <div className='skills'>
              <ul>
                <li onClick={(e)=> addFilterKeywords(e.target.innerText)}>{role}</li>
                <li onClick={(e)=> addFilterKeywords(e.target.innerText)}>{level}</li>
                {languages.map((language,idx) => {
                  return <li key={idx} onClick={(e)=> addFilterKeywords(e.target.innerText)}>{language ? language : ''}</li>
                })}
                {tools.map((tool,idx) => {
                  return <li key={idx} onClick={(e)=> addFilterKeywords(e.target.innerText)}>{tool}</li>
                })}
              </ul>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Element
