// Importing styled components

import {NoteText, NoteTitle, ListItem} from './styledComponents'

const NoteItem = props => {
  const {noteData} = props
  const {title, notes} = noteData

  return (
    <ListItem>
      <NoteTitle>{title}</NoteTitle>
      <NoteText>{notes}</NoteText>
    </ListItem>
  )
}

export default NoteItem
