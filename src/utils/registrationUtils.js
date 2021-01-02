import { useState } from "react";

const initialErrorState = {
  vornameError: "",
  nachnameError: "",
  geburtsdatumError: "",
  strabeError: "",
  plzError: "",
};

const initialValues = {
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
};

export const useInput = () => {
  const [user, setUser] = useState(initialValues);

  const [errors, setErrors] = useState(initialErrorState);

  const validate = () => {
    let vornameError = "";
    let nachnameError = "";
    let geburtsdatumError = "";
    let strabeError = "";
    let plzError = "";
    if (!user.vorname) {
      vornameError = "Vorname erforderlich";
    }
    if (!user.nachname) {
      nachnameError = "Nachname erforderlich";
    }
    if (!user.tag) {
      geburtsdatumError = "ungültiges Geburtsdatum";
    }
    if (!user.strabe) {
      strabeError = "straße erforderlich";
    }
    if (!user.plz) {
      plzError = "postleitzahl erforderlich";
    }
    if (!user.monat) {
      geburtsdatumError = "ungültiges Geburtsdatum";
    }

    if (
      user.vorname.length < 2 ||
      user.nachname.length < 2 ||
      user.tag.length < 1 ||
      user.strabe.length < 2 ||
      user.plz.length < 2 ||
      user.monat.length < 2
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

  const bind = {
    user,
    handleChange: (e) => {
      const value = e.target.value;
      setUser({
        ...user,
        [e.target.name]: value,
      });
    },
    handleSubmit: (e) => {
      e.preventDefault();
      const isValid = validate();
      if (isValid) {
        setErrors(initialErrorState);
      }
    },
  };

  return [user, bind, errors];
};
