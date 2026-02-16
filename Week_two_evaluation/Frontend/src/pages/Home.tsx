import { Outlet, useLocation } from "react-router-dom";
import HomeCards from "../components/HomeCards";

type HomeCardDetails = { title: string; navigation: string };

function Home() {
  const { pathname } = useLocation();

  const homeCardDetails: HomeCardDetails[] = [
    { title: "Current", navigation: "/current" },
  ];

  return (
    <div className="min-h-[70vh] px-6 py-10">
      
      {/* {pathname === "/" && (
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
            {homeCardDetails.map((item, idx) => (
              <HomeCards
                title={item.title}
                navigation={item.navigation}
                key={idx}
              />
            ))}
          </div>

        </div>
      )} */}

      <div >
        <Outlet />
      </div>

    </div>
  );
}

export default Home;
