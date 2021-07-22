export interface NoteModel {
  _id: string;
  title: string;
  desc: string;
  timestamp: string;
}

export interface NoteListModel {
  NoteList: NoteModel[];
  tempTitle: string;
  tempDesc: string;
}
