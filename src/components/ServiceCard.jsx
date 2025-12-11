import React from 'react'


export default function ServiceCard({ title, colorClass, icon, description }) {
return (
<div className="flex flex-col items-center text-center px-4" data-aos="fade-up">
<div className={`w-28 h-28 rounded-full flex items-center justify-center text-3xl ${colorClass} shadow-inner transform hover:scale-105 transition`}>{icon}</div>
<h3 className="text-xl font-semibold mt-4">{title}</h3>
<p className="text-gray-500 mt-3 max-w-xs">{description}</p>
</div>
)
}