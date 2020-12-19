import React from 'react';

const Register = (props) => {
    const {
        onChange,
        vorname,
        nachname,
        tag,
        monat,
        jahr,
        password,
        onSubmit,
        errors,
        onBlur,
        touched,
    } = props;

    return (
        <div className="wrapper">
            <h1>Welcome to Raisley!!!</h1>
            <h1>Sign up now</h1>

            <form id="myForm" className="form-wrapper" noValidate onSubmit={onSubmit}>
                <div className="check-grid">
                    <label htmlFor="Anrede">Anrede* </label>
                    <label className="container">Herr
                        <input type="radio" checked="checked" name="radio"/>
                        <span className="checkmark"/>

                    </label>
                    <label className="container">Frau
                        <input type="radio" name="radio"/>
                        <span className="checkmark"/>
                    </label>
                </div>
                <div className="grid">
                    <div className="vorname">
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
                        {touched.vorname && errors.vorname ? (
                            <span className="errorMessage">
                                {errors.vorname}
                            </span>
                        ) : null}
                    </div>
                    <div className="nachname*">
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
                        {touched.nachname && errors.nachname ? (
                            <span className="errorMessage">
                                {errors.nachname}
                            </span>
                        ) : null}
                    </div>
                </div>
                <div className="email">
                    <label htmlFor="geburtsdatum">Geburtsdatum*</label>
                    <input
                        type="tag"
                        className="form-control profile__input"
                        name="tag"
                        value={tag}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="TT"
                        id="email"
                    />
                    {touched.email && errors.email ? (
                        <span className="errorMessage">{errors.tag}</span>
                    ) : null}
                    <input
                        type="monat"
                        className="form-control profile__input"
                        name="monat"
                        value={monat}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="MM"
                        id="email"
                    />
                    {touched.email && errors.email ? (
                        <span className="errorMessage">{errors.monat}</span>
                    ) : null}
                    <input
                        type="jahr"
                        className="form-control profile__input"
                        name="jahr"
                        value={jahr}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="JJJ"
                        id="email"
                    />
                    {touched.email && errors.email ? (
                        <span className="errorMessage">{errors.jahr}</span>
                    ) : null}
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control profile__input"
                        name="password"
                        value={password}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Password"
                        id="password"
                    />
                    {touched.email && errors.password ? (
                        <span className="errorMessage">{errors.password}</span>
                    ) : null}
                </div>
                <div className="createAccount">
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
