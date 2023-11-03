type Props = {
  setShowDelete: () => void;
  onDelete: () => void;
}

export function DeleteEntryModal({ setShowDelete, onDelete }: Props) {
  return (
    <article>
      <div
        id="modalContainer"
        className="modal-container d-flex justify-center align-center">
        <div className="modal row">
          <div className="column-full d-flex justify-center">
            <p>Are you sure you want to delete this entry?</p>
          </div>
          <div className="column-full d-flex justify-between">
            <button className="modal-button" id="cancelButton" onClick={setShowDelete}>
              Cancel
            </button>
            <button
              className="modal-button red-background white-text"
              id="confirmButton" onClick={onDelete}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
