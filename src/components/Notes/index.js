// importing hook
import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'

// importing Styled components
import {
  EmptyDescription,
  EmptyHeading,
  NoNotesImg,
  NoNotesCard,
  Button,
  Heading,
  Textarea,
  Input,
  NotesList,
  NotesInput,
  Container,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [allNotes, setArray] = useState([])

  const addTitle = event => {
    setTitle(event.target.value)
  }
  const addNotes = event => {
    setNotes(event.target.value)
  }
  const updateArray = () => {
    const noteArr = {title, notes, id: uuidV4()}
    setArray(prev => [...prev, noteArr])
  }

  return (
    <Container>
      <Heading>Notes</Heading>
      <NotesInput>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          onChange={addTitle}
        />

        <Textarea
          name="note"
          placeholder="Take a Note"
          rows="2"
          cols="8"
          onChange={addNotes}
        />

        <Button type="button" onClick={updateArray}>
          Add
        </Button>
      </NotesInput>
      {allNotes.length ? (
        <NotesList>Hello</NotesList>
      ) : (
        <NoNotesCard>
          <NoNotesImg
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyDescription>Notes you add will appear here</EmptyDescription>
        </NoNotesCard>
      )}
    </Container>
  )
}

export default Notes
