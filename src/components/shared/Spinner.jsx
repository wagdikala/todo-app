import Card from "../shared/Card";
import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <Card style={{ justifyContent: "center" }}>
      <img style={{ width: "25px" }} src={spinner} alt="Loading" />
    </Card>
  );
}

export default Spinner;
