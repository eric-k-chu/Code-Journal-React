import { EntryForm } from './EntryForm';
import { Entries } from './Entries';
import { useState } from 'react';
import { Entry, readEntries } from '../data';

type Props = {
  showEntries: boolean;
  onClick: (bool: boolean) => void;
};

export function Views({ showEntries, onClick }: Props) {
  const [entries, setEntries] = useState<Entry[]>(readEntries());
  const [currentEntry, setCurrentEntry] = useState<Entry>();

  return (
    <>
      <main>
        {showEntries ? (
          <Entries
            onNewEntryClick={onClick}
            entries={entries}
            onSetCurrentEntry={setCurrentEntry}
          />
        ) : (
          <EntryForm
            onNewEntryClick={onClick}
            onSave={setEntries}
            entries={entries}
            currentEntry={currentEntry}
            setCurrentEntry={setCurrentEntry}
          />
        )}
      </main>
    </>
  );
}
