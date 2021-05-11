import { useEffect, useState } from "react";
import axios from "axios";

const Booking = (props: any) => {
  const [booking, setBooking]: any = useState(null);
  useEffect(() => {
    const fetchBooking = async () => {
      const result = await axios.get(
        `http://localhost:5000/booking/booking/${props.match.params.id}`
      );
      setBooking(result.data.booking);
    };
    fetchBooking();
  }, [props.match.params.id]);

  console.log("props", booking);
  if (!booking) return <p>loading</p>;

  return (
    <>
      <p>Reservation</p>
      <p>
        nom complet: {booking?.userId.firstName} {booking?.userId.lastName}
      </p>
      <p>numero:</p>
      <p>trajet:</p>
      <p>poids: {booking.poids}</p>
      <p>status: {booking.status}</p>
      <div>
        <button
          onClick={async () => {
            const result = await axios.put(
              `http://localhost:5000/booking/bookingAccept/${props.match.params.id}`
            );
            await axios.post(
              "http://localhost:5000/Booking/sendemailResponse",
              {
                mail: booking?.userId.email,
                token: localStorage.getItem("token"),
                isAccept: true,
                bookingId: booking.data.newBooking._id,
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
          onClick={async () => {
            const result = await axios.put(
              `http://localhost:5000/booking/bookingRefut/${props.match.params.id}`
            );
            await axios.post(
              "http://localhost:5000/Booking/sendemailResponse",
              {
                mail: booking?.userId.email,
                token: localStorage.getItem("token"),
                isAccept: false,
                bookingId: booking.data.newBooking._id,
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
  );
};

export default Booking;
