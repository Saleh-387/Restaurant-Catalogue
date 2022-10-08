import "regenerator-runtime"; /* for async await transpile */
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/main.css";
import "./component/skipToContent.js";
import "./component/headerBar.js";
import "./component/hero.js";
import "./component/restaurantDetail.js";
import "./component/contentList.js";
import "./component/footerBar.js";
import App from "./views/app";
import swRegister from "./utils/sw-register";
import WebSocketInitiator from "./utils/websocket-initiator";
import CONFIG from "./globals/config";

const app = new App({
    button: document.querySelector("#hamburger"),
    drawer: document.querySelector("#navigation"),
    content: document.querySelector("main"),
});

window.addEventListener("hashchange", () => {
    app.renderPage();
});

window.addEventListener("load", () => {
    app.renderPage();
    swRegister();
    WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
