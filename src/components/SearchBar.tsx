import React from 'react'


export default function SearchBar({ value, onChange }:{ value:string; onChange:(v:string)=>void }){
return (
<div className="max-w-2xl mx-auto">
<input value={value} onChange={e=>onChange(e.target.value)} placeholder="Search snacks, categories or descriptions..." className="w-full px-4 py-3 rounded-md border" />
</div>
)
}