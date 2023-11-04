type Props = {
  onCancelDelete: () => void;
  onDeleteEntry: () => void;
}

export function DeleteEntryModal({ onCancelDelete, onDeleteEntry }: Props) {
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
            <button className="modal-button" id="cancelButton" onClick={onCancelDelete}>
              Cancel
            </button>
            <button
              className="modal-button red-background white-text"
              id="confirmButton" onClick={onDeleteEntry}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
