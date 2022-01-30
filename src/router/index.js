import Vue from "vue";
import VueRouter from "vue-router";
import Contacto from "@/views/Contacto";
import Articulo from "@/views/Articulo";
import SobreMi from "@/views/SobreMi";
import UltimoPost from "@/views/UltimoPost";
import NotFound from "@/views/NotFound";
import Post from "@/views/Post";
import RutasInexistentes from "@/views/RutasInexistentes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto
  },
  {
    path: "/",
    name: "Articulo",
    component: Articulo
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
    children: [
      {
        path: ":id",
        component: Articulo
      }
    ]
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    component: SobreMi
  },
  {
    path: "/post/:id",
    name: "Ultimopost",
    component: UltimoPost
  },
  {
    path: "/rutasinexistentes",
    name: "RutasInexistentes",
    component: RutasInexistentes
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
