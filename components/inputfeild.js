

import React from 'react'

const Inputfeild = (props) => {
    return (
        <div className='flex gap-1 flex-col mx-3 my-2'>
            <label className='text-[14px]'>{props.label}</label>
            <input type={props.type}
                name={props.name}
                pattern={props.pattern}
                // min={props.min}
                // max={props.max}
                // min={3}
                // max={5}
                // title={props.min && props.max ? `title="Please enter a value between ${props.min} and ${props.max}"`: ''}
                // minLength={props.min}
                // maxLength={props.max}
                readOnly={props.read}
                disabled={props.disabled}
                onChange={props.onChange}
                value={props?.formData?.[props?.name] ? props.formData[props.name] : ''}
                placeholder={props.plholder}
                className='px-4 py-2 rounded-lg bg-slate-100 focus:border-solid focus:border-blue-900 outline-none w-full mb-4' />
        </div>
    )
};

export default Inputfeild