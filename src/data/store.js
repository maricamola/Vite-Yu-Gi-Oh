import { reactive } from 'vue'

export const store = reactive({
  originalapiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  resultArray: [],
  //Array vuota dei type
  listType: [],
  filterType: null,
  typeToSearch: '',
});