import axios from '~/plugins/axios';

// Init state with one product
export const state = () => ({
  products: [
    {
      id: 1,
      name: 'iTunes Card ($100)'
    }
  ],
  ids: [],
  items: []
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setIds(state, ids) {
    state.ids = ids;
  },
  setItems(state, items) {
    state.items = items;
  }
};

export const actions = {
  async LOAD_ITEMS({commit}, dataUrl) {
    // create fake data response to update local state
    const response = {
      data: [
        {
          id: 1,
          name: 'iTunes Card ($30)'
        },
        {
          id: 2,
          name: 'iTunes Card ($50)'
        }
      ]
    }
    const products = response.data;

    const storiesRes = await axios.get(dataUrl);
    const ids = storiesRes.data;

    // get the first 8 ids
    const eightIds = ids.slice(0, 8);

    // retrieve items by id
    const idPromises = eightIds.map(id => axios.get(`item/${id}.json`));
    const itemPromises = await Promise.all(idPromises);
    const items = itemPromises.map(res => res.data);

    // Handling items not existed
    const realItems = items.map(
      item =>
        item
          ? item
          : {
            id: 999,
            title: 'Item does not exist.'
          }
    );

    commit('setProducts', products);
    commit('setIds', ids);
    commit('setItems', realItems);
  }
};
