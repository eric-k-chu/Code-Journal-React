import { type EntryType } from "./View";
import { Entry } from "./Entry";
import { useState } from "react";

type Props = {
  entries: EntryType[];
  onClick: (bool:boolean)=> void;
  showUpdate: boolean;
  setShowUpdate: ()=> void;
}

export function Entries({ entries, onClick, showUpdate, setShowUpdate }: Props) {


  return (
    <div className="container" data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <a id="formLink" className="white-text form-link" href="#" onClick={()=>onClick(false)}>
              NEW
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul" id="entryUl">
            {entries.map(entries => <Entry key={entries.entryId} title={entries.title} photoUrl={entries.photoUrl} notes={entries.notes} onUpdateClick={setShowUpdate}/>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
