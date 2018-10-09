
export enum actionTypes {
    // noteSelectingReducer:
    SWITCH_EDIT_MODE_TO_GIVEN_ID_ONLY = "SWITCH_EDIT_MODE_TO_GIVEN_ID_ONLY",
    TOGGLE_EDIT_MODE_FOR_GIVEN_ID = "TOGGLE_EDIT_MODE_FOR_GIVEN_ID",
    TOGGLE_HIGHLIGHT = "TOGGLE_HIGHLIGHT",
    SELECT_AND_REMEMBER_NOTEID = "SELECT_AND_REMEMBER_NOTEID",

    // notesListReducer:
    CREATE_NOTE = "CREATE_NOTE",
    UPDATE_NOTE_CONTENT = "UPDATE_NOTE_CONTENT",
    DELETE_NOTE = "DELETE_NOTE",
    MOVE_CLOSER_TO_ANCESTOR = "MOVE_CLOSER_TO_ANCESTOR",
    ATTACH_REMEMBERED_NOTE_TO_PARENT = "ATTACH_REMEMBERED_NOTE_TO_PARENT",
    TOGGLE_DONE_STATUS_ENTIRE_NOTE_BRANCH = "TOGGLE_DONE_STATUS_ENTIRE_NOTE_BRANCH",
    LOAD_ALL_NOTES = "LOAD_ALL_NOTES",
}