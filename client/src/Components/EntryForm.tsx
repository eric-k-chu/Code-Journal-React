import { DeleteEntryModal } from './DeleteEntryModal';
import { FormEvent, useState } from 'react';
import {
  addEntry,
  updateEntry,
  removeEntry,
  type UnsavedEntry,
  type Entry,
} from '../data';
import { type EntryFormProp } from '../App';

type Props = EntryFormProp & {
  currentEntry: Entry | undefined;
};

export function EntryForm({ currentEntry, onEntryFormOpen }: Props) {
  const [title, setTitle] = useState(currentEntry?.title ?? '');
  const [photoUrl, setPhotoUrl] = useState(currentEntry?.photoUrl ?? '');
  const [notes, setNotes] = useState(currentEntry?.notes ?? '');
  const [showDelete, setShowDelete] = useState(false);

  function handleSubmitEntry(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const unsavedEntry: UnsavedEntry = { title, photoUrl, notes };

    if (currentEntry === undefined) {
      addEntry(unsavedEntry);
    } else {
      updateEntry({ entryId: currentEntry.entryId, ...unsavedEntry } as Entry);
    }
    onEntryFormOpen(null);
  }

  function handleDeleteEntry(): void {
    if (currentEntry) {
      removeEntry(currentEntry.entryId);
      setShowDelete(false);
      onEntryFormOpen(null);
    }
  }

  return (
    <>
      <div className="container" data-view="entry-form">
        <div className="row">
          <div className="column-full d-flex justify-between">
            <h1 id="formH1">
              {currentEntry === undefined ? 'New Entry' : 'Edit Entry'}
            </h1>
          </div>
        </div>
        <form id="entryForm" onSubmit={handleSubmitEntry}>
          <div className="row margin-bottom-1">
            <div className="column-half">
              <img
                className="input-b-radius form-image"
                id="formImage"
                src={
                  photoUrl ? photoUrl : 'images/placeholder-image-square.jpg'
                }
                alt={photoUrl ? photoUrl : 'placeholder image'}
              />
            </div>
            <div className="column-half">
              <label className="margin-bottom-1 d-block" htmlFor="formTitle">
                Title
              </label>
              <input
                required
                className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                type="text"
                id="formTitle"
                name="formTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label className="margin-bottom-1 d-block" htmlFor="formURL">
                Photo URL
              </label>
              <input
                required
                className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                type="text"
                id="formURL"
                name="formURL"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="row margin-bottom-1">
            <div className="column-full">
              <label className="margin-bottom-1 d-block" htmlFor="formNotes">
                Notes
              </label>
              <textarea
                required
                className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
                name="formNotes"
                id="formNotes"
                cols={30}
                rows={10}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}></textarea>
            </div>
          </div>
          <div className="row">
            <div className="column-full d-flex justify-between">
              <button
                className={`${
                  currentEntry === undefined ? 'invisible' : ''
                } delete-entry-button`}
                type="button"
                id="deleteEntry"
                onClick={() => setShowDelete(true)}>
                Delete Entry
              </button>
              <button
                className="input-b-radius text-padding purple-background white-text"
                type="submit">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
      {showDelete && (
        <DeleteEntryModal
          onCancelDelete={() => setShowDelete(false)}
          onDeleteEntry={handleDeleteEntry}
        />
      )}
    </>
  );
}
