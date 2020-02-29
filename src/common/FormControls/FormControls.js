import React from 'react';
import styles from "./form_control.module.css";

export const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
    <div>
      <input {...input} {...props}/>
    </div>
    {meta.touched && meta.error && <span>"Some Error"</span>}
  </div>
}
