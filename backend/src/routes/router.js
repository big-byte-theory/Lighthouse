export default class Router {
  #routers = [];

  addRouter = (router) => {
    this.#routers.push(router);
  };

  getRouter = () => {
    return this.#routers;
  };
}