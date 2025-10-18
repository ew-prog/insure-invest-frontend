import React, { useEffect, useState } from 'react'
// Optional only if you are using charts:
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function LeadsDashboard(){
  const [leads,setLeads]=useState([])
  const [search,setSearch]=useState('')

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/leads`,{
      headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}
    }).then(res=>res.json()).then(setLeads).catch(console.error)
  },[])

  const filtered=leads.filter(l=>l.name.toLowerCase().includes(search.toLowerCase()) || l.email.toLowerCase().includes(search.toLowerCase()))
  const leadsByDay=leads.reduce((acc,l)=>{
    const d=new Date(l.createdAt).toLocaleDateString()
    const item=acc.find(a=>a.date===d)
    if(item)item.count+=1
    else acc.push({date:d,count:1})
    return acc
  },[])

  return(
    <div>
      <input placeholder="Search..." value={search} onChange={e=>setSearch(e.target.value)} />
      {filtered.length===0 ? <p>No leads</p> :
      <table><thead><tr><th>Name</th><th>Email</th><th>Phone</th></tr></thead>
      <tbody>{filtered.map((l,i)=><tr key={i}><td>{l.name}</td><td>{l.email}</td><td>{l.phone}</td></tr>)}</tbody></table>}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={leadsByDay}><XAxis dataKey="date"/><YAxis/><Tooltip/><Bar dataKey="count" fill="#16a34a"/></BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LeadsDashboard
