import { formatTime, formatTimestamp } from "@/hooks/format";
import { ITicketData } from "@/interfaces/ticket";
import { ticketService } from "@/services/ticket.services";
import { useState } from "react";
import toast from "react-hot-toast";

type TicketDetailProps = {
    ticket: ITicketData;
    ticketCategory: string;
    onBookingComplete: (confirmBooking: boolean) => void;
};

const TicketDetail = ({ ticket, ticketCategory, onBookingComplete }: TicketDetailProps) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [confirmBooking, setConfirmBooking] = useState<boolean>(false);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleBookingTicket = async () => {
        try {
            const response = await ticketService.bookingTickets({ option: ticketCategory, quantity: quantity }, ticket._id);
            if (response.success) {
                toast.success("Booking ticket successfully");
                setConfirmBooking(true);
                onBookingComplete(true);
            }
        } catch (error) {
            toast.error("Booking ticket failed");
        }
    }

    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <h1 className="text-4xl font-bold mb-4">{ticket.title}</h1>
                        <p className="text-lg mb-6">{ticket.description}</p>
                        <div className="mb-6 flex">
                            <div className="w-full lg:w1/2">
                                <p className="text-xl font-bold mb-2">Depart Time:</p>
                                <p className="text-lg">{formatTime(ticket.depart_time)}</p>
                            </div>
                            <div className="w-full lg:w1/2">
                                <p className="text-xl font-bold mb-2">Arrive Time:</p>
                                <p className="text-lg">{formatTime(ticket.arrive_time)}</p>
                            </div>
                        </div>
                        <div className="mb-6 flex">
                            <div className="w-full lg:w-1/2">
                                <p className="text-xl font-bold mb-2">Date:</p>
                                <p className="text-lg">{formatTimestamp(ticket.date)}</p>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <p className="text-xl font-bold mb-2">Quantity:</p>
                                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={() => handleDecreaseQuantity()} className="border text-gray-600 hover:text-gray-700 hover:bg-gray-100 h-full w-20 rounded-l cursor-pointer outline-none">
                                        <span className="m-auto text-2xl font-thin items-center">-</span>
                                    </button>
                                    <input type="number" className="outline-none focus:outline-none text-center w-full border font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700" value={quantity}></input>
                                    <button onClick={() => handleIncreaseQuantity()} className="border text-gray-600 hover:text-gray-700 hover:bg-gray-100 h-full w-20 rounded-r cursor-pointer">
                                        <span className="m-auto text-2xl font-thin items-center">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <p className="text-xl font-bold mb-2">Prices:</p>
                            {ticketCategory === "business" ? (
                                <p className="text-lg">{ticket.business_price * quantity} ฿ - Business Price</p>
                            ) : (
                                <p className="text-lg">{ticket.standard_price * quantity} ฿ - Standard Price</p>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => handleBookingTicket()}
                                disabled={confirmBooking || ticket.seat_limit === ticket.seat_booked}
                                className="bg-primary-color hover:bg-primary-hover-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TicketDetail