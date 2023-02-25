const NoteSelected = (props) => {
    const note = props.notes.filter(note => note.selected)[0];

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        props.onChange(note.id, e.target.value);

    return note ?
        <div key={note.id} className="note">
            <div className="note-text">
                <textarea onChange={handleChange} value={note.text} />
            </div>
        </div> : null;
};

export default NoteSelected;
