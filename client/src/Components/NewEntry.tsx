import { FormEvent, useState } from "react";
import { type EntryType } from "./View";

type Props = {
  onSave: (entries: EntryType[])=> void;
  entries: EntryType[];
  onClick: (bool:boolean) => void;
}

export function NewEntry({onSave, entries, onClick}: Props) {
  const [title, setTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [notes, setNotes] = useState('');

  function handleSave(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newEntry: EntryType = {
      entryId: 1,
      title: title,
      photoUrl: photoUrl,
      notes: notes
    }
    onSave([...entries, newEntry]);
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
            <label className="margin-bottom-1 d-block" htmlFor="title">
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
            <label className="margin-bottom-1 d-block" htmlFor="photoUrl">
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
              className="invisible delete-entry-button"
              type="button"
              id="deleteEntry">
              Delete Entry
            </button>
            <button className="input-b-radius text-padding purple-background white-text" type="submit" onClick={()=>onClick(true)}>
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
