import Main from "./Main";
import MapInformation from "../../Modules/Auth/mapInformation/mapInformation";
import HomeDriver from "../../driver/components/HomeDriver/HomeDriver";

function dashbord(): JSX.Element {
  return (
    <div>
      <div>
        {localStorage.getItem("token") ? (
          localStorage.getItem("role") === "driver" ? (
            <HomeDriver />
          ) : (
            <MapInformation />
          )
        ) : (
          <Main />
        )}
      </div>
    </div>
  );
}
export default dashbord;
