import Layout from '../layouts/Main'
import { postContact } from '../api/contact/index'
import {Formik, Field, FieldProps} from "formik"
import {SelectField, TextField, Checkbox, CheckboxGroup, RadioButton, RadioButtonGroup} from "../components/fields/InputField"
import React from "react";
import MapsContainer from "../components/Maps/MapsContainer"
import IntroBanner from "../components/IntroBanner";
import absoluteUrl from 'next-absolute-url'

const initialFormFields = {pets: [], contactpersoon: '', emailadres: '', bedrijfsnaam: '', telefoonnummer: '', uw_bericht: '', select: "", radio: "", checkbox: false};
const testArray = {a: 1, b: 2, c: 3}

const Page = ({  }) => {
    return <Layout>
        <IntroBanner title="contact"/>
        <div className="container pb-5">
            <div className="row">
                <div className="col-md-9">

                    <h1 className="h2">neem contact met ons op</h1>
                    <p>Heeft u nog vragen of opmerkingen, vul dan hieronder het contactformulier in.
                        Voor vragen of opmerkingen met spoed mail dan naar helpdesk@xxxxx.nl.</p>
                    <Formik onSubmit={(data, actions) => {
                            actions.setSubmitting(true);
                            postForm(data, actions)
                        }}
                        initialValues={initialFormFields}>

                        {({values, errors, touched, setFieldValue, setFieldTouched, handleChange, handleBlur, handleSubmit, isSubmitting}) => <div>
                            <form onSubmit={handleSubmit} className="needs-validation">

                                <TextField
                                    name="contactpersoon"
                                    label="contactpersoon"
                                    error={errors.contactpersoon}
                                    value={values.contactpersoon}
                                />
                                 <TextField
                                    type="email"
                                    name="emailadres"
                                    label="emailadres"
                                    error={errors.emailadres}
                                    value={values.emailadres} />
                                 <TextField
                                    type="text"
                                    name="bedrijfsnaam"
                                    label="bedrijfsnaam"
                                    error={errors.bedrijfsnaam}
                                    value={values.bedrijfsnaam} />

                                <TextField
                                    type="textarea"
                                    name="uw_bericht"
                                    label="uw_bericht"
                                    error={errors.uw_bericht}
                                    value={values.uw_bericht} />

                                <button type="submit" className="btn-blue btn btn-block" disabled={isSubmitting}>
                                    <i className={`${isSubmitting ? "fas fa-spinner fa-spin" : null}`}></i> Verzenden
                                </button>

                            </form>
                        </div>}

                    </Formik>
                </div>
                <div className="col-md-3">
                    <style jsx>{` 
                        h4 {
                            color: #393939;
                            font-size: 18px;
                            font-weight: 500;
                            line-height: 1.2em;
                            margin-bottom: 8px;
                            margin-top: 0;
                        }
                        li {
                            border: none;
                            color: #717171;
                            display: block;
                            font-size: 14px;
                            padding: 4px 0;
                            -webkit-transition: color .3s;
                            transition: color .3s;
                        } 
                        ul {
                            margin-bottom:20px;
                        }  
                    `}</style>
                    <h4>Contactgegevens</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Tel: 085 – xxxxxx <br/>
                            E-mail: info@bedrijfsnaam.nl <br/>
                            KvK: xxxxxx <br/>
                            BTW: xxxxxx <br/>
                            IBAN: xxxxxx <br/>
                        </li>
                    </ul>

                    <h4>Openingstijden</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Maandag t/m vrijdag:<br/>
                            9:30 – 18:00 uur.<br/>
                            Storingen kunnen buiten kantoor uren gemeld worden via <br/>
                            helpdesk@bedrijfsnaam.nl<br/>
                            asasdasd
                        </li>
                    </ul>
                    <MapsContainer />

                </div>
            </div>
        </div>
    </Layout>
}

function postForm(data, actions) {

    return postContact(data)
        .then((data) => {
            if(typeof data.errors !== 'undefined'){
                Object.keys(data.errors).forEach(function (item) {
                    actions.setFieldError(item, data.errors[item][0])
                });
                return data.errors;
            }else if (data.status == '200'){
                console.log('messages is ontvangen', data)
            }else {
                console.log('something went wrong')
                return {}
            }
        })
        .finally(() => {
            actions.setSubmitting(false)
        })
}

export default Page
