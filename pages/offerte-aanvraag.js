import Layout from '../layouts/Main'
import { postContact } from '../api/contact/index'
import {Formik, Field, FieldProps} from "formik"

import {SelectField, TextField, Checkbox, CheckboxGroup, RadioButton, RadioButtonGroup} from "../components/fields/InputField"

import IntroBanner from "../components/IntroBanner";

const initialFormFields = {diensten: [], maandelijkse_diensten: [], contactpersoon: '', emailadres: '', bedrijfsnaam: '', telefoonnummer: '', uw_bericht: '', select: "", radio: "", checkbox: false};

const ServiceTypes = {
    "onderhoud van uw bestaande website en of webshop": 1,
    "websoftware een maatwerk systeem special gemaakt op uw bedrijfs behoeftes": 2,
    "e-commerce web applicatie incl. (ideal, CMS, product management en ERP)": 3
}

const SLAs = {
    "wilt u een hosting pakket voor uw applicatie('s)?": 1,
    "wilt u een zakelijk voip telefoon nummer?": 2,
    "wilt u iemand die uw content management?": 3,
    "wilt u blijven invensteren om de website over tijd beter te maken voor (CTA) call to action?": 4
}

const Page = ({}) => {

    const onSubmitForm = (data, actions) => {
        actions.setSubmitting(true);
        postForm(data, actions)
    }

    return <Layout>
        <IntroBanner title="offerte aanvraag"/>
        <div className="container">
            <div className="row">
                <div className="col-md-9">

                    <h2>offerteformulier</h2>
                    <Formik onSubmit={onSubmitForm} initialValues={initialFormFields}>
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

                                <CheckboxGroup
                                    id="diensten"
                                    label="naar welke dienst bent u opzoek?"
                                    value={values.diensten}
                                    error={errors.diensten}
                                    touched={touched.diensten}
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                >
                                    {Object.keys(ServiceTypes).map(function(name, index) {
                                        return (
                                            <Field
                                                key={index}
                                                component={Checkbox}
                                                id={name}
                                                label={name}
                                            />
                                        )
                                    })}
                                </CheckboxGroup>

                                <CheckboxGroup
                                    id="maandelijkse_diensten"
                                    label="maandelijkse diensten"
                                    value={values.maandelijkse_diensten}
                                    error={errors.maandelijkse_diensten}
                                    touched={touched.maandelijkse_diensten}
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                >
                                    {Object.keys(SLAs).map(function(name, index) {
                                        return (
                                            <Field
                                                key={index}
                                                component={Checkbox}
                                                id={name}
                                                label={name}
                                            />
                                        )
                                    })}
                                </CheckboxGroup>

                                <TextField
                                    type="textarea"
                                    name="opmerking"
                                    label="uw_bericht"
                                    error={errors.uw_bericht}
                                    value={values.uw_bericht} />

                                <button type="submit" className="btn-blue btn btn-block" disabled={isSubmitting}>Verzenden</button>

                                <pre>{JSON.stringify(values, null, 2)}</pre>


                            </form>
                        </div>}

                    </Formik>
                </div>
                <div className="col-md-3">

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
