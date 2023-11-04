import { EntryCard } from './EntryCard';
import { type Entry } from '../data';
import { type EntryFormProp } from '../App';

type Props = EntryFormProp & {
  entries: Entry[];
};

export function Entries({ entries, onEntryFormOpen }: Props) {
  const entriesToDisplay =
    entries.length > 0 ? (
      entries.map((entry) => (
        <EntryCard
          key={entry.entryId}
          entry={entry}
          onEntryFormOpen={onEntryFormOpen}
        />
      ))
    ) : (
      <li>You have no entries.</li>
    );

  return (
    <div className="container" data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <a
              id="formLink"
              className="white-text form-link"
              href="#"
              onClick={() => onEntryFormOpen(undefined)}>
              NEW
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul" id="entryUl">
            {entriesToDisplay}
          </ul>
        </div>
      </div>
    </div>
  );
}
