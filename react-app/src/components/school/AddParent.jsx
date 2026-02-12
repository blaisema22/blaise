import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddParent(){
  const [form, setForm] = useState({name:'', phone:'', address:''})
  const nav = useNavigate()
  const handleSubmit = (e) => { e.preventDefault(); alert('Would send add parent: '+JSON.stringify(form)); nav('/parents') }
  return (
    <div className="container">
      <h2>Add Parent</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
        <label>Address</label>
        <textarea name="address" value={form.address} onChange={e=>setForm({...form, address:e.target.value})} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
