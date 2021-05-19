import { useEffect, useState } from "react";
import axios from "axios";
import "./booking.scss";

const Booking = (props: any) => {
  const [booking, setBooking]: any = useState(null);
  useEffect(() => {
    const fetchBooking = async () => {
      const result = await axios.get(
        `http://localhost:5000/booking/booking/${props.match.params.id}`);
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
      <p>Name: {booking?.userId.firstName} {booking?.userId.lastName} </p>
      <p>Adress Source (governorate): {booking?.userId.governorateAddressSource}  </p>
      <p>Adress {booking?.userId.addresSource} </p>

      <p>Adress destinataire (governorate): {booking?.userId.governorateAddressDestination} </p>
      <p>Adress : {booking?.userId.addressDestination}</p>
      <p>Poids: {booking.poids}</p>
      <p>Hauteur: {booking.hauteur}</p>
      <p>Largeur: {booking.largeur}</p>
      <p>Profondeur: {booking.profondeur}</p>
      <p>Type of cars: {booking.TypeOfCars}</p>
      <p>Service: {booking.service}</p>
      <p>Packaging: {booking.packaging}</p>
      <p>Payment Methode: {booking.paymentMethode}</p>
      <p>NoteToDriver: {booking.noteToDriver}</p>
      <p>Status: {booking.status}</p>
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
