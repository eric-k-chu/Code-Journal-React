import { FormEvent, useState } from "react";
import { type Entry } from '../data';

type Props = {
  onSave: (entries: Entry[]) => void;
  entries: Entry[];
  onClick: (bool:boolean) => void;
  currentEntry: Entry | undefined;
}

export function NewEntry({ onSave, entries, onClick, currentEntry }: Props) {
  const [title, setTitle] = useState(currentEntry?.title ?? '');
  const [photoUrl, setPhotoUrl] = useState(currentEntry?.photoUrl ?? '');
  const [notes, setNotes] = useState(currentEntry?.notes ?? '');

  function handleSave(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newEntry: Entry = {
      entryId: 55,
      title: title,
      photoUrl: photoUrl,
      notes: notes
    }
    onSave([...entries, newEntry]);
    onClick(true);
  }

  return (
    <div className="container" data-view="entry-form">
      <div className="row">
        <div className="column-full d-flex justify-between">
          <h1 id="formH1">New Entry</h1>
        </div>
      </div>
      <form id="entryForm" onSubmit={handleSave}>
        <div className="row margin-bottom-1">
          <div className="column-half">
            <img
              className="input-b-radius form-image"
              id="formImage"
              src="images/placeholder-image-square.jpg"
              alt="image of entry image"
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
             {currentEntry !== undefined && <button
                className="invisible delete-entry-button"
                type="button"
                id="deleteEntry">
                Delete Entry
              </button>
            }
            <button className="input-b-radius text-padding purple-background white-text" type="submit">
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
