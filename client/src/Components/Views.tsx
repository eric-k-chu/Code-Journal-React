import { EntryForm } from './EntryForm';
import { Entries } from './Entries';
import { type Entry, readEntries } from '../data';
import { type EntryFormProp } from '../App';

type Props = EntryFormProp & {
  isEntriesShown: boolean;
  currentEntry: Entry | undefined;
};

export function Views({
  isEntriesShown,
  currentEntry,
  onEntryFormOpen,
}: Props) {
  const entries = readEntries();

  return (
    <>
      <main>
        {isEntriesShown ? (
          <Entries entries={entries} onEntryFormOpen={onEntryFormOpen} />
        ) : (
          <EntryForm
            currentEntry={currentEntry}
            onEntryFormOpen={onEntryFormOpen}
          />
        )}
      </main>
    </>
  );
}
