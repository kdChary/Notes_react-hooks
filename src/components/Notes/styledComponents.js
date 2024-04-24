import styled from 'styled-components'

// Styling container
const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    justify-content: center;
  }

  padding: 2vh 2vw;
  gap: 10px;

  font-family: 'Roboto';
`
const NotesInput = styled.div`
  width: 80%;
  //   height: 210px;
  display: flex;
  flex-direction: column;

  box-shadow: 0 4px 12px 0 #cbd5e1;
  padding: 13px;
  margin-bottom: 7vh;
`
const NotesList = styled.ul`
  padding-left: 0;
  list-style-type: none;

  display: flex;
  flex-wrap: wrap;
`

// Styling Input and Text area.
const Input = styled.input`
  width: 100%;
  height: 23px;

  border: none;
  background: transparent;

  font-size: 10px;
  font-weight: 500;
  color: #475569;

  cursor: pointer;
  outline: none;
  margin-bottom: 9px;
`
const Textarea = styled.textarea`
  width: 100%;
  height: 23px;

  border: none;
  background: transparent;

  font-size: 10px;
  font-weight: 500;
  color: #475569;

  cursor: pointer;
  outline: none;
  margin-bottom: 11px;
`
// Styling Heading
const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-weight: 600;
  letter-spacing: 0.6px;
`
// Styling Button
const Button = styled.button`
  align-self: flex-end;
  padding: 3px 9px;

  background: #4c63b6;
  border: solid 1px #4c63b6;
  border-radius: 3px;

  font-size: 13px;
  font-weight: 500;
  color: #ffffff;

  outline: none;
  cursor: pointer;
`

// Styling no notes area.
const NoNotesCard = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const NoNotesImg = styled.img`
  width: 98px;
  @media (min-width: 768px) {
    width: 153px;
  }
`
const EmptyHeading = styled(Heading)`
  font-size: 15px;
  font-family: 'Roboto';
  color: #475569;
  margin-bottom: 0;
`
const EmptyDescription = styled.p`
  font-size: 11px;
  font-family: 'Roboto';
  color: #475569;
  margin-top: 7px;
`

export {
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
}
