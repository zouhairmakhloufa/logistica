import Main from "./Main";
import Navbar from "./Navbar";


function dashbord(): JSX.Element {
  return (
    <div>
      <Navbar />
      <div className="DashboardImage">
        <Main />
      </div>
    </div>
  );
};
export default dashbord;

