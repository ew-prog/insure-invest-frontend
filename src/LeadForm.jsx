import React, { useState } from 'react'

function LeadForm() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/leads`,{
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':`Bearer ${localStorage.getItem('token')}`},
        body:JSON.stringify({name,email,phone})
      })
      if(!res.ok)throw new Error('Failed')
      alert('Lead submitted!')
      setName(''); setEmail(''); setPhone('')
    }catch(err){alert('Submission failed');console.error(err)}
  }

  return(
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} required/>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
      <input type="tel" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} required/>
      <button type="submit">Submit Lead</button>
    </form>
  )
}

export default LeadForm
