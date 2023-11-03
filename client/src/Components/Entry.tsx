type Props = {
  title: string;
  photoUrl: string;
  notes: string;
  onUpdateClick: ()=> void;
}

export function Entry({ title, photoUrl, notes, onUpdateClick }: Props ) {
  return (
    <li>
      <div className="row">
        <div className="column-half">
          <img className="input-b-radius form-image" src={photoUrl}/>
        </div>
        <div className="column-half">
          <div className="row">
            <div className="column-full d-flex justify-between align-center">
              <h3>{title}</h3>
              <i className="fa-solid fa-pencil" onClick={onUpdateClick}/>
            </div>
          </div>
          <p>{notes}</p>
        </div>
      </div>
    </li>
  );
}
