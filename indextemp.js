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

  function addRoute(name, description, location, website, email) {
    const route = document.querySelector("#route-template").content;
    const clonedRoute = route.cloneNode(true);
    /* const omschrijving = clonedRoute.querySelector(".description"); */
    clonedRoute.querySelector(".name").innerText = name;
    clonedRoute.querySelector(".description").innerText = description;
    clonedRoute.querySelector(".location").innerText = location;
    clonedRoute.querySelector(
      ".website"
    ).innerText = `href=${website}>${website}</a>`;
    clonedRoute.querySelector(".email").innerText = email;
    const routes = document.querySelector("#routes");
    routes.appendChild(clonedRoute);
  }

  routes.forEach((route) => {
    addRoute(
      "Naam",
      "Uitleg",
      "Plaats",
      "www.google.be",
      "vin.benzine@gmail.com"
    );
  });
})();
