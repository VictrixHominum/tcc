export type BookingType = {
  bookingId: string;
  bookingDate: string;
  bookingTime: string;
  numberOfPeople: number;
  bookingCost: number;
}

export class Booking implements BookingType {
  bookingId: string;
  bookingDate: string;
  bookingTime: string;
  numberOfPeople: number;
  bookingCost: number;

  constructor(booking: BookingType) {
    this.bookingId = booking.bookingId;
    this.bookingDate = booking.bookingDate;
    this.bookingTime = booking.bookingTime;
    this.numberOfPeople = booking.numberOfPeople;
    this.bookingCost = booking.bookingCost;
  }
}

export type MemberType = {
  id: number;
  prefix: string;
  firstName: string;
  lastName: string;
  membershipNumber: string;
  email: string;
  suffix?: string;
  preferredName?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  postcode?: string;
  bookings?: Booking[];
}

export class Member implements MemberType {
  id: number;
  prefix: string;
  firstName: string;
  lastName: string;
  membershipNumber: string;
  email: string;
  suffix?: string;
  preferredName?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  postcode?: string;
  bookings?: Booking[];

  constructor(member: MemberType) {
    this.id = member.id;
    this.prefix = member.prefix;
    this.firstName = member.firstName;
    this.lastName = member.lastName;
    this.membershipNumber = member.membershipNumber;
    this.email = member.email;
    this.suffix = member.suffix;
    this.preferredName = member.preferredName;
    this.phone = member.phone;
    this.addressLine1 = member.addressLine1;
    this.addressLine2 = member.addressLine2;
    this.city = member.city;
    this.postcode = member.postcode;
    this.bookings = member.bookings;
  }
}
