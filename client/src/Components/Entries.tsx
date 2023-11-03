import { Entry } from './Entry';
import { type Entry as EntryType } from '../data';

type Props = {
  entries: EntryType[];
  onNewEntryClick: (bool: boolean) => void;
  onSetCurrentEntry: (entry: EntryType) => void | undefined;
};

export function Entries({
  entries,
  onNewEntryClick,
  onSetCurrentEntry,
}: Props) {
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
              onClick={() => onNewEntryClick(false)}>
              NEW
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul" id="entryUl">
            {entries.map((entry) => (
              <Entry
                key={entry.entryId}
                entry={entry}
                onSetCurrentEntry={() => onSetCurrentEntry(entry)}
                onEditEntryClick={() => onNewEntryClick(false)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
