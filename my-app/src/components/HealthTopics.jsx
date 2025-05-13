import React from 'react'
import './HealthTopics.css'
import { CiSearch } from "react-icons/ci";

const HealthTopics = () => {
  return (
    <div>
      <div className="HealthTopics">
       <div className="h-topics">
        <p className="articles-heading">Health Articles & Resources</p>
       </div>
       <div className="search-bar">
          <CiSearch />
       </div>
    </div>
    </div>
  )
}

export default HealthTopics