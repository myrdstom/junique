import React from 'react';
import Register from './register';
import {useFormik} from 'formik';
import './registration.styles.scss';
import * as Yup from 'yup';


const RegisterView = () => {
    const formik = useFormik({
        initialValues: { vorname: '', nachname: '', geburtsdatum: '', password: '', tag:'', monat:'', jahr:''},
        validationSchema: Yup.object({
            vorname: Yup.string()
                .required('Vorname erforderlich'),
            nachname: Yup.string()
                .required('Nachname erforderlich'),
            tag: Yup.string()
                .required('ungültiges Geburtsdatum'),
            monat: Yup.string()
                .required('ungültiges Geburtsdatum'),
            jahr: Yup.string()
                .required('ungültiges Geburtsdatum'),
            password: Yup.string()
                .required('password required'),
        }),
        onSubmit: (values) => {
            const { vorname, nachname, email, password } = values;
            return {
                campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
                data: {
                    vorname,
                    nachname,
                    email,
                    password,
                },
            }
        },
    });

    return (
        <div>
            <Register
                vorname={formik.values.vorname}
                onChange={formik.handleChange}
                nachname={formik.values.nachname}
                tag={formik.values.tag}
                monat={formik.values.monat}
                jahr={formik.values.jahr}
                password={formik.values.password}
                onSubmit={formik.handleSubmit}
                onBlur={formik.handleBlur}
                errors={formik.errors}
                touched={formik.touched}
            />
        </div>
    );
};

export default RegisterView;
