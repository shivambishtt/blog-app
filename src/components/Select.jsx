import React from 'react'
import { useId } from 'react'

function Select({
    options = [], //Here we are taking options as array because we know that there are not a single option but many so in order to store multiple option we will take array as default here
    label,
    className = "",
    ...props
}, ref) {

    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label >}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration 200 border border-gray-200 w-full ${className} `}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div >
    )
}

{/*  Here we are using ? as a conditional to check whether we have options available if we don't have the option available it will crash the application so to be on a safe side we are using the ? we can also use if else syntax here */ }
export default React.forwardRef(Select)
