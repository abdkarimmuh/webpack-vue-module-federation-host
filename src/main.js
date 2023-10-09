import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import remoteStore from "app_remote/store";

const app = createApp(App);
app.use(store);
app.use(remoteStore); // Using Remote Store
app.use(router);
app.mount("#app");
