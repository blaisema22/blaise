import React, {useState} from 'react'

export default function Signup(){
  const [form, setForm] = useState({name:'', email:'', password:''})
  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})
  const handleSubmit = (e) => { e.preventDefault(); alert('Would submit signup: '+JSON.stringify(form)) }

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} />
        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} />
        <label>Password</label>
        <input name="password" type="password" value={form.password} onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}
