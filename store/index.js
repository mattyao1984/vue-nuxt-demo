import axios from '~/plugins/axios';

// Init state with one product
export const state = () => ({
  products: [
    {
      id: 1,
      name: 'iTunes Card ($100)'
    }
  ],
  ids: []
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setIds(state, ids) {
    state.ids = ids;
  }
};

export const actions = {
  async nuxtServerInit({commit}) {
    //const response = await axios.get('products');  // retrieve data from API

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

    const storiesRes = await axios.get('topstories.json');
    const ids = storiesRes.data;

    commit('setProducts', products);
    commit('setIds', ids);
  }
};
