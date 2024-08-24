import React from 'react'
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from 'react-hook-form'

//Here control comes from the react hook form which is responsible to change the state of the component
export default function RTE({
    name,
    control,
    label,
    defaultValue = ""
}) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>
                {label}
            </label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey='58mzdgdwser1n7fprd9avuihkmsxv5c75fj6ltybk1jxoigq'
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        onEditorChange={onChange} //So here we mean that if any value or thing is changed in the editor the onChange function will be responsible for updating the state and etc
                    />
                )}
            />
        </div>

    )
}
