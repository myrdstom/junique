import React, { useState } from "react";
import Register from "./register";
import "./registration.styles.scss";

const initialErrorState = {
  vornameError: "",
  nachnameError: "",
  geburtsdatumError: "",
  strabeError: "",
  plzError: "",
}

const RegisterView = () => {
  const [user, setUser] = useState({
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
  });

  const [errors, setErrors] = useState({
    vornameError: "",
    nachnameError: "",
    geburtsdatumError: "",
    strabeError: "",
    plzError: "",
  });

  const {
    checked,
    vorname,
    nachname,
    tag,
    monat,
    jahr,
    strabe,
    nr,
    plz,
    ort,
  } = user;


  const validate = () => {
    let vornameError = "";
    let nachnameError = "";
    let geburtsdatumError = "";
    let strabeError = "";
    let plzError = "";
    if (!vorname) {
      vornameError = "Vorname erforderlich";
    }
    if (!nachname) {
      nachnameError = "Nachname erforderlich";
    }
    if (!tag) {
      geburtsdatumError = "ungültiges Geburtsdatum";
    }
    if (!strabe) {
      strabeError = "straße erforderlich";
    }
    if (!plz) {
      plzError = "postleitzahl erforderlich";
    }
    if (!monat) {
      geburtsdatumError = "ungültiges Geburtsdatum";
    }

    if (
      vorname.length < 2 ||
      nachname.length < 2 ||
      tag.length < 1 ||
      strabe.length < 2 ||
      plz.length < 2 ||
      monat.length < 2
    ) {
      setErrors({
        ...errors,
        vornameError,
        nachnameError,
        strabeError,
        geburtsdatumError,
        plzError,
      });
      return false;
    }

    return true;
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      setErrors(initialErrorState);
    }
  };

  return (
    <div>
      <Register
        checked={checked}
        vorname={vorname}
        onChange={handleChange}
        nachname={nachname}
        tag={tag}
        monat={monat}
        jahr={jahr}
        strabe={strabe}
        nr={nr}
        plz={plz}
        ort={ort}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default RegisterView;
