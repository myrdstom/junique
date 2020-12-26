import React, { useState, useEffect } from "react";
import Register from "./register";
import "./registration.styles.scss";
import {initialErrorState} from "../../utils/errorState";

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

  const [strabeLabel, setStrabeLabel] = useState("");
  const [nrLabel, setNrLabel] = useState("");
  const [plzLabel, setPLZLabel] = useState("");
  const [ortLabel, setOrtLabel] = useState("");

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    if (mql.matches) {
      setStrabeLabel("Straße.*");
      setNrLabel("Nr.*");
      setPLZLabel("PLZ*");
      setOrtLabel("Ort*");
    } else {
      setStrabeLabel("Straße/Nr.*");
      setNrLabel("");
      setPLZLabel("PLZ/Ort*");
      setOrtLabel("");
    }

    mql.addEventListener("change", (e) => {
      if (e.matches) {
        setStrabeLabel("Straße.*");
        setNrLabel("Nr.*");
        setPLZLabel("PLZ*");
        setOrtLabel("Ort*");
      } else {
        setStrabeLabel("Straße/Nr.*");
        setNrLabel("");
        setPLZLabel("PLZ/Ort*");
        setOrtLabel("");
      }
    });
  }, []);

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
    <div className="main">
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
        strabeLabel={strabeLabel}
        nrLabel={nrLabel}
        plzLabel={plzLabel}
        ortLabel={ortLabel}
      />
    </div>
  );
};

export default RegisterView;
