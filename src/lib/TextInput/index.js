import React from 'react'
import './style.css'

const TextInput = ({ type = 'text', label, value, onChange }) => (
    <div className='simple-form-group'>
        {label && <label className="simple-text-label">{label}</label>}
        <input
            type={type}
            className='simple-input-text'
            value={value}
            onChange={e => onChange && onChange(e.target.value)}
        />
    </div>
)

export default TextInput
