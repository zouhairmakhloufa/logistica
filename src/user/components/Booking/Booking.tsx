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
        <button>accepter</button>
        <button>refuser</button>
      </div>
    </>
  );
};

export default Booking;
