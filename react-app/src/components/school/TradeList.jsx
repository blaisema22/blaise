import React from 'react'

export default function TradeList(){
  const sample = [{id:1, name:'Carpentry'}]
  return (
    <div className="container">
      <h2>Trades</h2>
      <table className="table">
        <thead><tr><th>ID</th><th>Name</th></tr></thead>
        <tbody>{sample.map(t=> <tr key={t.id}><td>{t.id}</td><td>{t.name}</td></tr>)}</tbody>
      </table>
    </div>
  )
}
