import React from 'react'

function Button({
    children, //It is just a nomenclature otherwise we can name it as text or something else
    type = "button",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props} >{children}</button>
    )
}

export default Button
