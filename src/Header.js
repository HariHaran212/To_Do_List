import React from 'react'

const Header = ({title = "To Do List"}) => {
  return (
    <header>
      <div className="container d-flex justify-content-center">
        <h1>{title}</h1>
      </div>
    </header>
  )
}

export default Header
