import React, { useState, useEffect } from "react";
import Register from "./register";
import "./registration.styles.scss";
import {useInput} from "../../utils/registrationUtils";

const RegisterView = () => {

  const [user, bind, errors] = useInput();


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



  return (
    <div className="main">
      <Register
        checked={user.checked}
        vorname={user.vorname}
        onChange={bind.handleChange}
        nachname={user.nachname}
        tag={user.tag}
        monat={user.monat}
        jahr={user.jahr}
        strabe={user.strabe}
        nr={user.nr}
        plz={user.plz}
        ort={user.ort}
        onSubmit={bind.handleSubmit}
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
