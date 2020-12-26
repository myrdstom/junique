import React from "react";

const Register = (props) => {
  const {
    onChange,
    vorname,
    nachname,
    tag,
    monat,
    jahr,
    strabe,
    nr,
    plz,
    ort,
    onSubmit,
    errors,
    onBlur,
    strabeLabel,
    nrLabel,
    ortLabel,
    plzLabel,
  } = props;

  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      <div className="grid grid-checkbox">
        <label className="form__label ">Anrede* </label>
        <label className="form__container">
          Herr
          <input type="radio" name="radio" />
          <span className="form__checkMark" />
        </label>
        <label className="form__container">
          Frau
          <input type="radio" name="radio" />
          <span className="form__checkMark" />
        </label>
      </div>
      <div className="form-vorname">
        <label className="form__label">Vorname*</label>
        <input
          className="form__input"
          type="text"
          name="vorname"
          value={vorname}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="Vorname"
        />
      </div>
      {errors.vornameError ? (
        <div className="form-errorMessage">
          {" "}
          <span /> <span>{errors.vornameError}</span>
        </div>
      ) : null}
      <div className="form-nachname">
        <label className="form__label">Nachname*</label>
        <input
          className="form__input"
          type="text"
          name="nachname"
          value={nachname}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="Nachname"
        />
      </div>
      {errors.nachnameError ? (
        <div className="form-errorMessage">
          {" "}
          <span /> <span>{errors.nachnameError}</span>
        </div>
      ) : null}
      <div className="form-geburtsdatum">
        <label className="form__label">Geburtsdatum*</label>
        <div className="form-geburtsdatum__col">
          <input
            className="form__input"
            type="string"
            name="tag"
            value={tag}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="TT"
          />
          <input
            className="form__input"
            type="string"
            name="monat"
            value={monat}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="MM"
          />
          <input
            className="form__input"
            type="string"
            name="jahr"
            value={jahr}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="JJJJ"
          />
        </div>
      </div>
      {errors.geburtsdatumError ? (
        <div className="form-errorMessage">
          {" "}
          <span /> <span>{errors.geburtsdatumError}</span>
        </div>
      ) : null}
      <div className="form-strabe">
        <div className="form-strabe__labels">
          <label className="form__label">{strabeLabel}</label>
          <label className="form__label">{nrLabel}</label>
        </div>
        <div className="form-strabe__fields">
          <input
            className="form__input"
            type="string"
            name="strabe"
            value={strabe}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Straße"
          />
          <input
            className="form__input"
            type="string"
            name="nr"
            value={nr}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Nr"
          />
        </div>
      </div>
      {errors.strabeError ? (
        <div className="form-errorMessage">
          {" "}
          <span /> <span>{errors.strabeError}</span>
        </div>
      ) : null}
      <div className="form-plz">
        <div className="form-plz__labels">
          <label className="form__label">{plzLabel}</label>
          <label className="form__label">{ortLabel}</label>
        </div>
        <div className="form-plz__fields">
          <input
            className="form__input"
            type="string"
            name="plz"
            value={plz}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="PLZ"
          />
          <input
            className="form__input"
            type="string"
            name="ort"
            value={ort}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Ort"
          />
        </div>
      </div>
      {errors.plzError ? (
        <div className="form-errorMessage">
          {" "}
          <span /> <span>{errors.plzError}</span>
        </div>
      ) : null}
      <div className="createAccount">
        <span className="button_createAccount" />
        <button type="submit">Create Account</button>
      </div>
    </form>
  );
};

export default Register;
