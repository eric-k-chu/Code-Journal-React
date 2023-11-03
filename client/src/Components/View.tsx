import { NewEntry } from './NewEntry';
import { Entries } from './Entries';
import { DeleteEntryModal } from './DeleteEntryModal';
import { useState } from 'react';

export type EntryType = {
  entryId: number;
  title: string;
  photoUrl: string;
  notes: string;
}

type Props = {
  showEntries: boolean;
};

const testEntries: EntryType[] = [
  {entryId: 1, title: "React", photoUrl: "adsf", notes: "hello"},
  {entryId: 2, title: "React", photoUrl: "adsf", notes: "hello"},
  {entryId: 3, title: "React", photoUrl: "adsf", notes: "hello"},
  {entryId: 4, title: "React", photoUrl: "adsf", notes: "hello"},
  {entryId: 5, title: "React", photoUrl: "adsf", notes: "hello"},
  {entryId: 6, title: "React", photoUrl: "adsf", notes: "hello"},
]

export function Views({ showEntries }: Props) {
  const [entries, setEntries] = useState<EntryType[]>(testEntries);
  setEntries(testEntries);

  return (
    <>
      <main>{showEntries ? <Entries entries={entries}/> : <NewEntry />}</main>
      <DeleteEntryModal />
    </>
  );
}
