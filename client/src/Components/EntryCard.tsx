import { type Entry } from "../data";
import { type EntryFormProp } from '../App';

type Props = EntryFormProp & {
  entry: Entry;
}

export function EntryCard({ entry, onEntryFormOpen }: Props ) {
  return (
    <li>
      <div className="row">
        <div className="column-half">
          <img className="input-b-radius form-image" src={entry.photoUrl} alt={entry.photoUrl}/>
        </div>
        <div className="column-half">
          <div className="row">
            <div className="column-full d-flex justify-between align-center">
              <h3>{entry.title}</h3>
              <i className="fa-solid fa-pencil" onClick={() => onEntryFormOpen(entry)} />
            </div>
          </div>
          <p className="px-5">{entry.notes}</p>
        </div>
      </div>
    </li>
  );
}
