export const getNavigationItems = (isLoggedIn: boolean) => {
  return (isLoggedIn
      ? [
            { title: "Mon compte", to: { name: "account" }, icon: "$account" },
            { title: "Mes favoris", to: { name: "favorites" }, icon: "$heartOutline" },
            { title: "Se déconnecter", to: { name: "logout" }, icon: "$logout" }, 
        ]
      : [
            { title: "Se connecter", to: { name: "login" }, icon: "$login" },
            { title: "S'enregistrer", to: { name: "register" }, icon: "$register" },
      ]);
};

