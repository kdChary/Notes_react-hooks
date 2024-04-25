import styled from 'styled-components'

// Styling Note item
const ListItem = styled.li`
  width: 90%;
  @media (min-width: 768px) {
    width: 265px;
  }
  height: 135px;

  border: solid 1.5px #aab8c8;
  border-radius: 5px;
  box-shadow: 0 2px 6px 0 #cbd5e1;

  padding-left: 7px;
  padding: 7px;
  margin: 5px;
  cursor: pointer;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

// Styling Text content
const NoteTitle = styled.h4`
  font-family: 'Roboto';
  color: #334155;
  letter-spacing: 0.6px;
  line-height: 1.5;
  margin: 0;
`
const NoteText = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;

  color: #334155;
  letter-spacing: 0.5px;
  line-height: 1.5;
`
export {NoteText, NoteTitle, ListItem}
