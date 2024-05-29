import React from 'react';
import '../ConfirmModal/Confirm.css';

function ConfirmModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Вы уверены, что хотите удалить этот контакт?</h3>
                <div className="modal-actions">
                    <button onClick={onConfirm}>Да</button>
                    <button onClick={onClose}>Нет</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;