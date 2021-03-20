export const initialState = {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished develping..
    // token:'8vZ4d9GxFeyhtguFhqILrFu_SkGdhOCWyDDcN_h1tpvZiFBlr1j3YHYrnzyChwLKF5FLjR22IZ98T4YG3KMTAsL6voj9TkWhchRfc69M1bIV79ZtMXf82spDHA3EpGfpqJZqA5ZzWvs4TMPHrYpMr5wWzHs4XDhb6SZbZPdRl',
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    // Action --> type, [payload]
    switch(action.type) {
        case "SET_USER":
            return {
            ...state,
            user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
  };
  
  export default reducer;