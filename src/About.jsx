import React from 'react'
import Layout from './Layout'
import { Link, Outlet } from 'react-router-dom'
 

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-3">
              <Outlet/>
            </div>
            <div className="col-9">
                <h1>hello i am about content</h1>
                <Link to="hello">hello</Link>
            </div>
        </div>
      </div>
    </>
   
  )
}

export default About