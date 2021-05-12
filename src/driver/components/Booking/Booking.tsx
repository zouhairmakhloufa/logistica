import { useEffect, useState } from "react";
import axios from "axios";
import "./booking.scss";

const Booking = (props: any) => {
  const [booking, setBooking]: any = useState(null);
  useEffect(() => {
    const fetchBooking = async () => {
      const result = await axios.get(`http://localhost:5000/booking/booking/${props.match.params.id}`);
      setBooking(result.data.booking);
    };
    fetchBooking();
  }, [props.match.params.id]);

  console.log("props", booking);
  if (!booking) return <p>loading</p>;

  return (
    <div className="contentImage">
    <img src="/imageAuth/imageAuth.jpg" className="imageAuthInfo" />
    <div className="InfoBooking">
    <>
      <p>Reservation</p>
      <p>name: {booking?.userId.firstName} {booking?.userId.lastName} </p>
      <p>numero:  {booking?.userId.numDeTelf}   </p>
      <p>adresse source : {booking?.userId.governorateAddressSource}
        {booking?.userId.addresSource}</p>
      <p>adresse destinataire : {booking?.userId.governorateAddressDestination}
        {booking?.userId.addressDestination}</p>
      <p>poids: {booking.poids}</p>
      <p>hauteur: {booking.hauteur}</p>
      <p>largeur: {booking.largeur}</p>
      <p>profondeur: {booking.profondeur}</p>
      <p>type de cars: {booking.TypeOfCars}</p>
      <p>service: {booking.service}</p>
      <p>packaging: {booking.packaging}</p>
      <p>payment Methode: {booking.paymentMethode}</p>
      <p>noteToDriver: {booking.noteToDriver}</p>
      <p>status: {booking.status}</p>
      <div>
        <button
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          className="buttonAccept"
          onClick={async () => {
            const result = await axios.put(
              `http://localhost:5000/booking/bookingAccept/${props.match.params.id}`
            );
            await axios.post( "http://localhost:5000/Booking/sendemailResponse",
              {
                mail: booking?.userId.email,
                token: localStorage.getItem("token"),
                isAccept: true,
                bookingId: booking.data.booking_id,
              }
            );

            setBooking((prevBooking: any) => ({
              ...prevBooking,
              status: "accepter",
            }));

            // send mail to user tinformih ennou trajet accepter
            console.log("result", result);
          }}
        >
          accepter
        </button>


        <button
          style={{ background: "red", borderColor: "red" }}
          className="buttonCancel"
          onClick={async () => {
            const result = await axios.put(
               `http://localhost:5000/booking/bookingReffuse/${props.match.params.id}`
            );
            await axios.post( "http://localhost:5000/Booking/sendemailResponse",
              {
                mail: booking?.userId.email,
                token: localStorage.getItem("token"),
                isAccept: false,
                bookingId: booking.data.booking_id,
              }
            );
            setBooking((prevBooking: any) => ({
              ...prevBooking,
              status: "refuser",
            }));

            // send mail to user tinformih ennou trajet refuser
            console.log("result", result);
          }}
        >
          refuser
        </button>
      </div>
  
    </>
    </div>
    </div>
  );
};

export default Booking;
