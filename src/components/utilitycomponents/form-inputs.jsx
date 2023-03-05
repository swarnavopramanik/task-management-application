import { Form, Formik, useField } from 'formik';

export const InputField = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <div className='px-2 '>
            <label
                className='text-slate-100 select-none font-sans font-normal text-sm font- mb-1 '
                htmlFor={props.id || props.name}>{label}
            </label>
            <input
                className={"block w-full px-2 py-2 text-sm font-extralight text-slate-500 focus:text-slate-400 focus:outline focus:outline-slate-400 bg-zinc-900 rounded-lg duration-150 ease-in"}
                {...field}
                {...props} />
            {meta.touched && meta.error ? (
                <div className="text-xs font-mono select-none text-rose-400">{meta.error}</div>
            ) : null}
        </div>
    );
};

export const Checkbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export const Select = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};