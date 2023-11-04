import { Header } from './Components/Header';
import { Views } from './Components/View';
import { useState } from 'react';
import { type Entry } from './data';
import './styles.css';

export type EntryFormProp = {
  onEntryFormOpen: (entry: Entry | undefined | null) => void;
}

export function App() {
  const [showEntries, setShowEntries] = useState(true);
  const [currentEntry, setCurrentEntry] = useState<Entry>();

  function handleShowEntryForm(entry: Entry | undefined | null): void {
    // Show entries list
    if (entry === null) {
      setShowEntries(true);
      setCurrentEntry(undefined);

    // Show New Entry Form
    } else if (entry === undefined) {
      setShowEntries(false);
      setCurrentEntry(undefined);

    // Show Edit Entry Form
    } else {
      setShowEntries(false);
      setCurrentEntry(entry);
    }
  }

  return (
    <div>
      <Header onEntryFormOpen={handleShowEntryForm} />
      <Views
        isEntriesShown={showEntries}
        currentEntry={currentEntry}
        onEntryFormOpen={handleShowEntryForm}
      />
    </div>
  );
}
