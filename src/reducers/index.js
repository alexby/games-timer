export default (state = 0, action) => {
  switch (action.type) {
    case 'PAGE_MAIN':
      return {
        page: 'main',
      };
    case 'PAGE_TIMER':
      return {
        page: 'timer',
      };
    default:
      return state
  }
}