import React from 'react';
import Logo from './common/Logo';
import { observer } from 'mobx-react-lite';
import AuthStore from '../store/modules/Auth';
import Store from '../store/Store';
import { Link } from 'react-router-dom';
const Navigation = observer(() => {

    return (
        <div className="navigation">
            <Logo />

            {
                AuthStore.user
                    ? (
                        <div className="d-flex align-items-center flex-grow-1">
                            <button className="btn btn-dark btn-outline ms-3" onClick={Store.togglePanel}>
                                Мартшрут
                            </button>
                            <button className="btn btn-dark btn-outline ms-3" onClick={Store.toggleSaved}>
                                Збережені локації
                            </button>

                            <div className="ms-auto">
                                {AuthStore.user.displayName}
                            </div>
                            <button className="btn btn-dark btn-outline ms-3" onClick={AuthStore.logOut}>
                                Вийти
                            </button>
                        </div>
                    )
                    : (
                        <Link tag="button" to="/signIn" className="btn btn-dark btn-outline ms-auto">
                            Увійти
                        </Link>
                    )
            }
        </div>
    );
});


export default Navigation;