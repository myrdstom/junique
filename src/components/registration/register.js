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
  } = props;

  return (
    <main className="main">
      <form className="form" noValidate onSubmit={onSubmit}>
        <div className="grid grid-checkbox">
          <label>Anrede* </label>
          <label className="form__container">
            Herr
            <input type="radio" name="radio" />
            <span className="form__checkMark"/>
          </label>
          <label className="form__container">
            Frau
            <input type="radio" name="radio" />
            <span className="form__checkMark" />
          </label>
        </div>
        <div className="grid grid-inputs">
          <div className="grid__vorname">
            <label>Vorname*</label>
            <input
              type="text"
              name="vorname"
              value={vorname}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Vorname"
            />
          </div>
          {errors.vornameError ? (
              <div className="grid__errorMessage">
                {" "}
                <span />{" "}
                <span>{errors.vornameError}</span>
              </div>
          ) : null}
          <div className="grid__nachname">
            <label>Nachname*</label>
            <input
              type="text"
              name="nachname"
              value={nachname}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Nachname"
            />
          </div>
          {errors.nachnameError ? (
              <div className="grid__errorMessage">
                {" "}
                <span />{" "}
                <span>{errors.nachnameError}</span>
              </div>
          ) : null}
          <div className="grid__geburtsdatum">
            <label>Geburtsdatum*</label>
            <div className="grid__geburtsdatum__col">
              <input
                type="string"
                name="tag"
                value={tag}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="TT"
              />
              <input
                type="string"
                name="monat"
                value={monat}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="MM"
              />
              <input
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
              <div className="grid__errorMessage">
                {" "}
                <span />{" "}
                <span>{errors.geburtsdatumError}</span>
              </div>
          ) : null}
          <div className="grid__strabe">
            <div className="grid__strabe__labels">
              <label>
                <span>Straße*</span>
              </label>
              <label>Nr.*</label>
            </div>
            <div className="grid__strabe__fields">
              <input
                type="string"
                name="strabe"
                value={strabe}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Straße"
              />
              <input
                type="string"
                name="nr"
                value={nr}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Nr"
              />
            </div>
          </div>
          {errors.strabeError? (
              <div className="grid__errorMessage">
                {" "}
                <span />{" "}
                <span>{errors.strabeError}</span>
              </div>
          ) : null}
          <div className="grid__plz">
            <div className="grid__plz__labels">
              <label>
                <span>PLZ*</span>
              </label>
              <label>Ort*</label>
            </div>
            <div className="grid__plz__fields">
              <input
                  type="string"
                  name="plz"
                  value={plz}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="PLZ"
              />
              <input
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
              <div className="grid__errorMessage">
                {" "}
                <span />{" "}
                <span>{errors.plzError}</span>
              </div>
          ) : null}
        </div>
        <div className="createAccount">
          <span className="button_createAccount"></span>
          <button type="submit">Create Account</button>
        </div>
      </form>
    </main>
  );
};

export default Register;
