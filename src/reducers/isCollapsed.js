const initialState = {
  isCollapsed: false,
  showAddForm: false,
};

export function isCollapsed(state = initialState, action) {
  switch (action.type) {
    case "isCollapsedAndShowAdd":
      return action.payload;
    default:
      return state;
  }
}
