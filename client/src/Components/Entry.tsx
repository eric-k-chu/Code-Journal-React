import { type Entry as EntryType } from "../data";

type Props = {
  entry: EntryType;
  onSetCurrentEntry: () => void;
}

export function Entry({ entry, onSetCurrentEntry }: Props ) {
  return (
    <li>
      <div className="row">
        <div className="column-half">
          <img className="input-b-radius form-image" src={entry.photoUrl}/>
        </div>
        <div className="column-half">
          <div className="row">
            <div className="column-full d-flex justify-between align-center">
              <h3>{entry.title}</h3>
              <i className="fa-solid fa-pencil" onClick={onSetCurrentEntry}/>
            </div>
          </div>
          <p>{entry.notes}</p>
        </div>
      </div>
    </li>
  );
}
