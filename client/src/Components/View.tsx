import { NewEntry } from './NewEntry';
import { Entries } from './Entries';
import { DeleteEntryModal } from './DeleteEntryModal';
import { useState } from 'react';
import { Entry } from '../data';

type Props = {
  showEntries: boolean;
  onClick: (bool: boolean) => void;
};

export function Views({ showEntries, onClick }: Props) {
  const [entries, setEntries] = useState<Entry[]>([]);
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
          <NewEntry
            onClick={onClick}
            onSave={setEntries}
            entries={entries}
            currentEntry={currentEntry}
          />
        )}
      </main>
      <DeleteEntryModal />
    </>
  );
}
