import React from "react";
import Register from "./register";
import { useFormik } from "formik";
import './registration.styles.scss';
import * as Yup from "yup";

const RegisterView = () => {
  const formik = useFormik({
    initialValues: {
      checked: false,
      vorname: "",
      nachname: "",
      tag: "",
      monat: "",
      jahr: "",
      strabe: "",
      nr: "",
      plz: "",
      ort: "",
    },
    validationSchema: Yup.object({
      vorname: Yup.string().required("Vorname erforderlich"),
      nachname: Yup.string().required("Nachname erforderlich"),
      tag: Yup.number().typeError('geburtsdatum akzeptiert nur zahlen').required("ungültiges Geburtsdatum"),
      monat: Yup.number().typeError('geburtsdatum akzeptiert nur zahlen').required("ungültiges Geburtsdatum"),
      jahr: Yup.number().typeError('geburtsdatum akzeptiert nur zahlen').required("ungültiges Geburtsdatum"),
      strabe: Yup.string().required("straße erforderlich"),
      nr: Yup.string().required("straße erforderlich"),
      plz: Yup.string().required("postleitzahl erforderlich"),
      ort: Yup.string().required("postleitzahl erforderlich"),
    }),
    onSubmit: (values) => {
      const {
        vorname,
        nachname,
        tag,
        monat,
        jahr,
      } = values;
      return {
        vorname,
        nachname,
        tag,
        monat,
        jahr,
      };
    },
  });

  return (
    <div>
      <Register
          checked={formik.values.checked}
        vorname={formik.values.vorname}
        onChange={formik.handleChange}
        nachname={formik.values.nachname}
        tag={formik.values.tag}
        monat={formik.values.monat}
        jahr={formik.values.jahr}
        strabe={formik.values.strabe}
        nr={formik.values.nr}
        plz={formik.values.plz}
        ort={formik.values.ort}
        onSubmit={formik.handleSubmit}
        onBlur={formik.handleBlur}
        errors={formik.errors}
        touched={formik.touched}
      />
    </div>
  );
};

export default RegisterView;
