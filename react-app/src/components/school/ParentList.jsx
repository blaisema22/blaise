import React from 'react'
import { Link } from 'react-router-dom'

export default function ParentList(){
  // TODO: fetch parents from API; original PHP rendered server-side
  const sample = [{id:1,name:'John Doe',phone:'12345'}]
  return (
    <div className="container">
      <h2>Parents</h2>
      <Link to="/parents/add">Add Parent</Link>
      <table className="table" style={{marginTop:8}}>
        <thead><tr><th>ID</th><th>Name</th><th>Phone</th><th>Actions</th></tr></thead>
        <tbody>
          {sample.map(p=> (
            <tr key={p.id}><td>{p.id}</td><td>{p.name}</td><td>{p.phone}</td><td><button>Edit</button> <button>Delete</button></td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
