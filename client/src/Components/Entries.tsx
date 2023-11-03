import { type EntryType } from "./View";
import { Entry } from "./Entry";

type Props = {
  entries: EntryType[];
}

export function Entries({ entries }: Props) {
  return (
    <div className="container" data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <a id="formLink" className="white-text form-link" href="#">
              NEW
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul" id="entryUl">
            {entries.map(entries => <Entry key={entries.entryId} title={entries.title} photoUrl={entries.photoUrl} notes={entries.notes}/>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
