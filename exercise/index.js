// IIFE (Immediately Invoked Function Expression) - to allow the use of async/await on the top level
// IIFE ( Immediately Invoked Function Expression ) - om async/await te kunnen gebruiken in 'de top level'
(async () => {
  let routes = [];
  const fetchRoutes = async () => {
    routes = await fetch(
      "https://opendata.visitflanders.org/accessibility/routes/info_about_routes_v2.json"
    ).then((res) => res.json());
  };
  await fetchRoutes();

  // From this point on, routes is a populated array
  // Vanaf hier is routes een array met data
  console.log(routes);

  routes.forEach((route) => {
    const newRouteElement = document
      .querySelector("#route-template")
      .content.cloneNode(true);
    const name = (newRouteElement.querySelector(".name").innerText =
      route.name);
    const description = (newRouteElement.querySelector(
      ".description"
    ).innerText = route.accessibility_description);
    const location = (newRouteElement.querySelector(".location").innerText =
      route.city_name);

    if (route.website) {
      const websiteLink = (newRouteElement.querySelector(".website").href =
        route.website);
      const websiteText = (newRouteElement.querySelector(".website").innerText =
        route.website);
    } else {
      const websiteHide = (newRouteElement.querySelector(".site").innerText =
        "");
    }

    if (route.email) {
      const emailLink = (newRouteElement.querySelector(
        ".email"
      ).href = `mailto:${route.email}`);
      const emailText = (newRouteElement.querySelector(".email").innerText =
        route.email);
    } else {
      const emailHide = (newRouteElement.querySelector(".mail").innerText = "");
    }

    const routesElement = document.querySelector("#routes");
    routesElement.appendChild(newRouteElement);
  });
})();
