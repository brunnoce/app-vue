import { createRouter, createWebHistory } from "vue-router"
import EventList from "../views/EventList.vue"
import EventDetails from "../views/EventDetails.vue"
import AboutView from "../views/AboutView.vue"
import Saludos from "../views/Saludos.vue"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/events/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  
  {
    path: "/saludo",
    name: "Saludo",
    component: Saludos,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
