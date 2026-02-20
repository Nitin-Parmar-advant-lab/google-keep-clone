import TakeNote from "./TakeNote";

export default function EditModal({ note, onClose, onSave, onDelete }) {
    return (
        <div
            id="modal-overlay"
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div onClick={(e) => e.stopPropagation()}>
                <TakeNote
                    isModalView={true}
                    initialNote={note}
                    onSaveModal={(updatedNote) => {
                        onSave(updatedNote);
                        onClose();
                    }}
                    onDeleteModal={(id) => {
                        onDelete(id);
                        onClose();
                    }}
                />
            </div>
        </div>
    );
}
