import React from "react";
import classNames from "classnames";
import {Field} from "formik"

// Input feedback
const InputFeedback = ({ error }) => error ? <div style={{color: "red"}} className={classNames("input-feedback")}>{error}</div> : null

// Checkbox input
export const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label,
  className,
  ...props
}) => {
    return (
        <div className="custom-control custom-checkbox">
            <input
                name={name}
                id={id}
                type="checkbox"
                value={value}
                checked={value}
                onChange={onChange}
                onBlur={onBlur}
                className="custom-control-input"
            />
            <label htmlFor={id} className="custom-control-label">{label}</label>
            {touched[name] && <InputFeedback error={errors[name]} />}
        </div>
    );
};


// Checkbox group
export class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = event => {
        const target = event.currentTarget;
        let valueArray = [...this.props.value] || [];

        if (target.checked) {
            valueArray.push(target.id);
        } else {
            valueArray.splice(valueArray.indexOf(target.id), 1);
        }

        this.props.onChange(this.props.id, valueArray);
    };

    handleBlur = () => {
        // take care of touched
        this.props.onBlur(this.props.id, true);
    };

    render() {
        const { value, error, touched, label, className, children } = this.props;

        const classes = classNames(
            "input-field",
            "form-group",
            {
                "is-success": value || (!error && touched), // handle prefilled or user-filled
                "is-error": !!error && touched
            },
            className
        );

        return (
            <div className={classes}>
                <label>{label}</label>
                {React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        field: {
                            value: value.includes(child.props.id),
                            onChange: this.handleChange,
                            onBlur: this.handleBlur
                        }
                    });
                })}
                {touched && <InputFeedback error={error} />}
             </div>
        );
    }
}

// Radio input
export const RadioButton = ({
    field: { name, value, onChange, onBlur },
    id,
    label,
    className,
    ...props
}) => {
    return (
        <div className="custom-control custom-radio">
            <input
                name={name}
                id={id}
                type="radio"
                value={value}
                checked={value}
                onChange={onChange}
                onBlur={onBlur}
                className="custom-control-input"
                {...props}
            />
            <label htmlFor={id} className="custom-control-label">
                {label}
            </label>
        </div>
    );
};

// Radio group
export const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
    const classes = classNames(
        "input-field",
        {
            "is-success": value || (!error && touched), // handle prefilled or user-filled
            "is-error": !!error && touched
        },
        className
    );

    return (
        <div className={classNames("form-group")}>
            <label>{label}</label>
            {children}
            {touched && <InputFeedback error={error} />}
        </div>
    );
};

export const SelectField = (props) => {
    return (
        <Field type="select" component={InputField} {...props} />
    )
}

export const TextField = (props) => {
    return (
        <Field type="text" component={InputField} {...props} />
    )
}

export const TextareaField = (props) => {
    return (
        <Field type="textarea" component={InputField} {...props} />
    )
}

export class InputField extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = event => {
        const {
            field: { name },
            form: { handleChange }
        } = this.props;

        handleChange(event);
    }

    renderSwitch(type) {
        switch (type) {
            case 'textarea':
                return <TextareaInput {...this.props} onChange={this.handleChange} />
            case 'text':
                return <TextInput {...this.props} onChange={this.handleChange} />
            case 'email':
                return <EmailInput {...this.props} onChange={this.handleChange} />
            default:
                return
        }
    }

    render() {
        const {label} = this.props;

        const inputProps = Object.assign({}, this.props);
        delete inputProps.form;
        delete inputProps.field;
        delete inputProps.error;
        delete inputProps.values;

        console.log(this.props.type)

        return (
            <div className="form-group">
                <style>{`
                    
                `}</style>
                <label>{label}</label>
                {this.renderSwitch(this.props.type)}
                {/*<TextareaInput {...this.props} onChange={this.handleChange} />*/}
                {/*<inputComponent />*/}

                {this.props.error && <InputFeedback error={this.props.error} />}
            </div>
        );
    }
}

// const get = (type) => {
//     switch (type) {
//         case '/':
//         case '/report':
//         case '/report/lesson_class':
//             const ReportSideBar = require('containers/layouts/admin/sidebars/report-sidebar').default
//             return <ReportSideBar />
//         default:
//             return null
//     }
// }

export const TextareaInput = (props) => {
    return (
        <textarea
            rows="5"
            className={`form-control${props.error ? ' is-invalid' : ''}`}
            onChange={props.onChange}
            id={props.label}
            {...props}
        ></textarea>
    )
}

export const EmailInput = (props) => {
    return (
        <input
            className={`form-control${props.error ? ' is-invalid' : ''}`}
            onChange={props.onChange}
            id={props.label}
            {...props}
        />
    )
}

export const TextInput = (props) => {
    return (
        <input
            className={`form-control${props.error ? ' is-invalid' : ''}`}
            onChange={props.onChange}
            id={props.label}
            {...props}
        />
    )
}


{/*<CheckboxGroup*/}
{/*    id="pets"*/}
{/*    label="Which of these?"*/}
{/*    value={values.pets}*/}
{/*    error={errors.pets}*/}
{/*    touched={touched.pets}*/}
{/*    onChange={setFieldValue}*/}
{/*    onBlur={setFieldTouched}*/}
{/*>*/}
{/*    {Object.keys(testArray).map(function(name, index) {*/}
{/*        return (*/}
{/*            <Field*/}
{/*                key={index}*/}
{/*                component={Checkbox}*/}
{/*                id={name}*/}
{/*                label={name}*/}
{/*            />*/}
{/*        )*/}
{/*    })}*/}
{/*</CheckboxGroup>*/}

{/*<RadioButtonGroup*/}
{/*id="radio"*/}
{/*label="One of these please"*/}
{/*value={values.radio}*/}
{/*error={errors.radio}*/}
{/*touched={touched.radio}*/}
{/*    >*/}
{/*    {Object.keys(testArray).map(function(name, index) {*/}
{/*            return (*/}
{/*                <Field*/}
{/*                    key={index}*/}
{/*                    component={RadioButton}*/}
{/*                    name="radio"*/}
{/*                    id={name}*/}
{/*                    label={name}*/}
{/*                />*/}
{/*            )*/}
{/*        })}*/}
{/*</RadioButtonGroup>*/}


// class TextInputWrappedInternal extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     handleChange = event => {
//         const {
//             field: { name },
//             form: { handleChange }
//         } = this.props;
//
//         handleChange(event);
//     };
//
//     render() {
//         const {field, label} = this.props;
//
//         const inputProps = Object.assign({}, this.props);
//
//         delete inputProps.form;
//         delete inputProps.label;
//         delete inputProps.field;
//         delete inputProps.error;
//         delete inputProps.values;
//
//         const map = { a: 1, b: 2, c: 3 };
//
//         return (
//             <div className="form-group">
//                 {/*label of input*/}
//                 {this.props.label &&
//                     <label htmlFor={this.props.id}>{label}</label>
//                 }
//
//                 {/*text input*/}
//                 {this.props.type == "text" &&
//                     <input
//                         onChange={this.handleChange} id={label} value={field.value} name={field.name} {...inputProps}
//                         className={`form-control${this.props.error ? ' is-invalid' : ''}`}
//                     />
//                 }
//
//                 {/*textarea input*/}
//                 {this.props.type == "textarea" &&
//                     <textarea
//                         onChange={this.handleChange} id={label} value={field.value} name={field.name} {...inputProps}
//                         className={`form-control${this.props.error ? ' is-invalid' : ''}`}
//                     />
//                 }
//
//                 {/*select input*/}
//                 {this.props.type == "select" && typeof this.props.values !== "undefined" &&
//                     <select className={`form-control${this.props.error ? ' is-invalid' : ''}`}
//                         onChange={this.handleChange} id={label} value={field.value} name={field.name} {...inputProps}
//                     >
//                         {Object.keys(this.props.values).map(function(name, index){
//                             return (
//                                 <option key={index} value={index}>
//                                     {name}
//                                 </option>
//                             )
//                         })}
//                     </select>
//                 }
//
//                 {/*{console.log('field', this)}*/}
//                 {/*/!*checkbox input*!/*/}
//                 {/*<label htmlFor="">pets</label>*/}
//                 {/*<FieldArray name="pets">*/}
//                 {/*    {(arrayHelper) => (*/}
//                 {/*        <div>*/}
//                 {/*            {console.log('-------------------------', this.props)}*/}
//                 {/*            /!*{this.props.values.map(pet => (*!/*/}
//                 {/*            /!*    <div key={pet.name}>*!/*/}
//
//                 {/*            /!*    </div>*!/*/}
//                 {/*            /!*))}*!/*/}
//                 {/*        </div>*/}
//                 {/*    )}*/}
//                 {/*</FieldArray>*/}
//                 {/*<label htmlFor="">end pets</label>*/}
//
//
//                 {this.props.type == "checkbox" && typeof this.props.values === 'object' &&
//                     <div>
//                         {console.log(this.handleChange.bind(this))}
//                         <div className="form-check">
//                             <input className="form-check-input" type="checkbox" name="pets" value="1" id="1" {...inputProps}
//                                 // onChange={this.handleChange}
//                                    onChange={(event) => {
//                                        console.log("========================",event, this);
//                                        const value = event.target.checked ? 'a' : null
//                                        console.log("========================2",value);
//
//                                        // this.props.setFieldValue('pets.0', value)
//                                    }}
//                                    // checked={ }
//                                 // checked={this.props.values.check}
//                                 // onChange={() => setFieldValue("check", !values.check)}
//                             />
//                             <label className="form-check-label" htmlFor="1">
//                                 test
//                             </label>
//                         </div>
//                         <div className="form-check">
//                             <input className="form-check-input" type="checkbox" name="pets" value="2" id="1" {...inputProps}
//                                 onChange={this.handleChange}
//
//                                 // checked={this.props.values.check}
//                                 // onChange={() => setFieldValue("check", !values.check)}
//                             />
//                             <label className="form-check-label" htmlFor="1">
//                                 test
//                             </label>
//                         </div>
//                     </div>

                    // Object.keys(this.props.values).map(function(name, index){
                    //     {console.log('test hier --------------------------------', index, name, inputProps)}
                    //     return (
                    //         <div className="form-check" key={index}>
                    //             <input className="form-check-input" type="checkbox" name={field.name} value={name} id={name+index} {...inputProps}
                    //                     // onChange={this.handleChange}
                    //
                    //                    // checked={values.check}
                    //                    // onChange={() => setFieldValue("check", !values.check)}
                    //             />
                    //             <label className="form-check-label" htmlFor={name+index}>
                    //                 {name}
                    //             </label>
                    //         </div>
                    //     )
                    // })
                // }

/*
                {/!*!/!*radio input*!/!*!/}
                {/!*{this.props.type == "radio" && typeof this.props.values !== "undefined" &&*!/}
                {/!*    Object.keys(this.props.values).map(function(name, index){*!/}
                {/!*        return (*!/}
                {/!*            <div className="form-check" key={index}>*!/}
                {/!*                <input className="form-check-input" type="radio" value={name} id={name+index} />*!/}
                {/!*                <label className="form-check-label" htmlFor={name+index}>*!/}
                {/!*                    {name}*!/}
                {/!*                </label>*!/}
                {/!*            </div>*!/}
                {/!*        )*!/}
                {/!*    })*!/}
                {/!*}*!/}*/


//                 {this.props.error &&
//                     <div style={{color: "red"}} className="invalid-feedback">
//                         {this.props.error}
//                     </div>
//                 }
//             </div>
//         );
//     }
// }
//
// export default props => <Field component={TextInputWrappedInternal} {...props} />;
