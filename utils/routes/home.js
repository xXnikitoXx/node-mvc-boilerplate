const { Controller } = require("@tech-lab/node-mvc");

class Home extends Controller {
	DescribeRoutes() {
		this.prefix = "";

		this.IndexRoute = "/";
		this.IndexTitle = "Welcome!";
	}

	async Index() {
		return await this.View("home");
	}
}

module.exports = (app, utils) => new Home(app, utils);