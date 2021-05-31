import React from 'react';
import LocationStore from '../store/modules/Locations';
import { observer } from 'mobx-react-lite';

const NewLocation = observer(() => {

    if (!LocationStore.activeLocation) return null

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name } = e.target.elements;
        LocationStore.addLocation({ name: name.value })
    };
    const handleCancel = (e) => {
        LocationStore.closeDialog();
    };

    return (
        <div className="page-dialog">
            <div className="dialog">
                <div className="dialog__title">Нова локація</div>
                <div className="text-white">{LocationStore.activeLocation.address}</div>
                <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <div className="wrapper-input">
                        <input
                            required
                            className="form-control mb-2"
                            name="name"
                            placeholder="Введіть назву"
                        />
                    </div>

                    <div className="d-flex align-center mt-3">
                        <button type="button" onClick={handleCancel} className="btn btn-outline-light">
                            Закрити
                        </button>
                        <button type="submit" className="btn btn-success ms-auto">
                            Зберегти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
});


export default NewLocation