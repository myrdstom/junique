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
    touched,
  } = props;

  return (
    <main className="main">
      <form id="myForm" className="form-wrapper" noValidate onSubmit={onSubmit}>
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
            <label htmlFor="vorname">Vorname*</label>
            <input
              type="text"
              name="vorname"
              value={vorname}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Vorname"
              id="vorname"
            />
          </div>
          {touched.vorname && errors.vorname ? (
              <div className="grid__errorMessage">
                {" "}
                <span />{" "}
                <span>{errors.vorname}</span>
              </div>
          ) : null}
          <div className="grid__nachname">
            <label htmlFor="lastName">Nachname*</label>
            <input
              type="text"
              name="nachname"
              value={nachname}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Nachname"
              id="nachname"
            />
          </div>
          {touched.nachname && errors.nachname ? (
              <div className="grid__errorMessage">
                {" "}
                <span />{" "}
                <span>{errors.nachname}</span>
              </div>
          ) : null}
          <div className="grid__geburtsdatum">
            <label htmlFor="geburtsdatum">Geburtsdatum*</label>
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
          {touched.tag || touched.monat || touched.jahr ? (
              <div className="grid__errorMessage">
                {" "}
                <span />{" "}
                <span>{errors.tag || errors.monat || errors.jahr}</span>
              </div>
          ) : null}
          <div className="grid__strabe">
            <div className="grid__strabe__labels">
              <label htmlFor="strabe">
                <span>Straße*</span>
              </label>
              <label htmlFor="nr">Nr.*</label>
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
          {touched.strabe || touched.nr? (
              <div className="grid__errorMessage">
                {" "}
                <span />{" "}
                <span>{errors.strabe || errors.nr}</span>
              </div>
          ) : null}
          <div className="grid__plz">
            <div className="grid__plz__labels">
              <label htmlFor="plz">
                <span>PLZ*</span>
              </label>
              <label htmlFor="ort">Ort*</label>
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
          {touched.plz || touched.ort? (
              <div className="grid__errorMessage">
                {" "}
                <span />{" "}
                <span>{errors.plz || errors.ort}</span>
              </div>
          ) : null}
        </div>
        <div className="createAccount">
          <button type="submit">Create Account</button>
        </div>
      </form>
    </main>
  );
};

export default Register;
