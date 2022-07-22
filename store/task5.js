export const state = () => ({
  pages: { homePage: "Home Page", aboutPage: "About Page" },
  headers: { homePage: "Welcome!", aboutPage: "Hi from" },
});

export const mutations = {
  changeHomeDescription(state, newDescription) {
    state.pages.homePage = newDescription;
  },
  changeAboutDescription(state, newDescription) {
    state.pages.aboutPage = newDescription;
  },
};

export const getters = {
  getPages(state) {
    return state.pages;
  },
  getHeaders(state) {
    return state.headers;
  },
  getHomePage(state) {
    return state.pages[0];
  },
};

export const actions = {
  changeHomeDescription(ctx, desc) {
    ctx.commit("changeHomeDescription", desc);
  },
  changeAboutDescription(ctx, desc) {
    ctx.commit("changeAboutDescription", desc);
  },
};
