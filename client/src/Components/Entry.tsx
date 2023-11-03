import { type Entry as EntryType } from "../data";

type Props = {
  entry: EntryType;
  onSetCurrentEntry: () => void;
  onEditEntryClick: () => void;
}

export function Entry({ entry, onSetCurrentEntry, onEditEntryClick }: Props ) {

  function handleEdit(): void {
    onSetCurrentEntry();
    onEditEntryClick();
  }

  return (
    <li>
      <div className="row">
        <div className="column-half">
          <img className="input-b-radius form-image" src={entry.photoUrl} />
        </div>
        <div className="column-half">
          <div className="row">
            <div className="column-full d-flex justify-between align-center">
              <h3>{entry.title}</h3>
              <i className="fa-solid fa-pencil" onClick={handleEdit} />
            </div>
          </div>
          <p className="px-5">{entry.notes}</p>
        </div>
      </div>
    </li>
  );
}
