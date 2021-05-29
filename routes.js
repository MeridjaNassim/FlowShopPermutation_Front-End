/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Branch_and_Bound from "views/B&B.js";
import NEH from "views/NEH";
import CDS from "views/CDS";
import SA from "views/SA";
import GA from "views/GA";
import FSP from "views/FSP";
import CDF from "views/CDF";

var routes = [
  {
    path: "/FSP",
    name: "FSP",
    component: FSP,
    layout: "/admin",
  },
  {
    path: "/Branch_and_Bound",
    name: "Branch and Bound",
    component: Branch_and_Bound,
    layout: "/admin",
  },
  {
    path: "/NEH",
    name: "Heuristique NEH",
    component: NEH,
    layout: "/admin",
  },
  {
    path: "/CDS",
    name: "CDS",
    component: CDS,
    layout: "/admin",
  },
  {
    path: "/GA",
    name: "Algorithmes génetiques",
    component: GA,
    layout: "/admin",
  },
  {
    path: "/SA",
    name: "Récuit Simulé",
    component: SA,
    layout: "/admin",
  },
  {
    path: "/CDF",
    name: "Colonnie de fourmis",
    rtlName: "قائمة الجدول",
    component: CDF,
    layout: "/admin",
  },
  // {
  //   path: "/CDF",
  //   name: "Colonnie de fourmis",
  //   rtlName: "قائمة الجدول",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   component: Rtl,
  //   layout: "/rtl",
  // },
];
export default routes;
