import React, { useMemo, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuCircleCheckBig } from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";

const SESSION_TYPES = [
  {
    id: "voice",
    title: "Voice Coaching Session",
    description:
      "A personalized voice coaching session to improve clarity, tone, and presentation skills.",
    duration: "25 minutes",
    price: 40,
  },
  {
    id: "consult",
    title: "Initial Consultation",
    description: "Comprehensive assessment and planning session",
    duration: "60 minutes",
    price: 15,
  },
];

const TIMES = ["10:00 AM", "11:00 AM", "12:30 PM", "02:00 PM", "03:30 PM"];
const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});
const fullDateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

function StepPill({ index, title, isActive, isDone }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-semibold sm:h-11 sm:w-11 ${
          isDone || isActive
            ? "border-green-200 bg-green-500 text-white"
            : "border-gray-300 bg-white text-gray-600"
        }`}
      >
        {isDone ? <LuCircleCheckBig className="text-lg" /> : index}
      </div>
      <p
        className={`text-xs font-semibold sm:text-sm ${
          isActive ? "text-slate-900" : "text-slate-500"
        }`}
      >
        {title}
      </p>
    </div>
  );
}

function BookingSummary({ selectedSession, selectedDate, selectedTime }) {
  const total = selectedSession?.price ?? 0;

  return (
    <aside className="rounded-2xl border border-green-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-24">
      <h3 className="text-xl font-semibold text-slate-800">Booking Summary</h3>
      <p className="mt-2 text-sm text-slate-500">Review your selection</p>

      {selectedSession ? (
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-slate-800">
            {selectedSession.title}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {selectedSession.description}
          </p>
          <span className="mt-3 inline-flex items-center rounded-lg border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
            <MdOutlineAccessTime className="mr-1" />
            {selectedSession.duration}
          </span>
          {selectedDate ? (
            <div className="mt-3">
              <p className="text-sm font-semibold text-slate-700">Date</p>
              <p className="text-sm text-slate-600">
                {fullDateFormatter.format(selectedDate)}
              </p>
            </div>
          ) : null}
          {selectedTime ? (
            <div className="mt-3">
              <p className="text-sm font-semibold text-slate-700">Time</p>
              <p className="text-sm text-slate-600">{selectedTime}</p>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6 rounded-xl border border-green-200 bg-bgColor p-5">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-slate-800">Total</p>
          <p className="text-2xl font-bold text-green-600">${total.toFixed(2)}</p>
        </div>
        <p className="mt-2 text-sm text-slate-500">Prices include all fees</p>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-slate-600">
        <li className="flex items-center gap-1"><GiCheckMark size={11} className="text-green-500" /> Free cancellation up to 24 hours before</li>
        <li className="flex items-center gap-1"><GiCheckMark size={11} className="text-green-500" /> Confirmation email will be sent</li>
        <li className="flex items-center gap-1"><GiCheckMark size={11} className="text-green-500" /> Secure payment processing</li>
      </ul>
    </aside>
  );
}

function BookSession() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);

  const [step, setStep] = useState(1);
  const [sessionId, setSessionId] = useState("");
  const [visibleMonth, setVisibleMonth] = useState(todayMonthStart);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [details, setDetails] = useState({ name: "", email: "", phone: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const selectedSession = useMemo(
    () => SESSION_TYPES.find((item) => item.id === sessionId),
    [sessionId],
  );

  const progressPercent = step === 1 ? 34 : step === 2 ? 67 : 100;
  const canGoPrevMonth = visibleMonth.getTime() > todayMonthStart.getTime();
  const isDetailsComplete =
    details.name.trim() && details.email.trim() && details.phone.trim();
  const canContinue =
    step === 1
      ? Boolean(sessionId)
      : step === 2
        ? Boolean(selectedDate && selectedTime)
        : Boolean(isDetailsComplete);

  const calendarDays = useMemo(() => {
    const month = visibleMonth.getMonth();
    const year = visibleMonth.getFullYear();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];

    for (let i = 0; i < firstDayIndex; i += 1) {
      cells.push({ key: `empty-${i}`, type: "empty" });
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month, day);
      const isPast = date.getTime() < today.getTime();
      const isSunday = date.getDay() === 0;
      cells.push({
        key: `day-${day}`,
        type: "day",
        day,
        date,
        disabled: isPast || isSunday,
      });
    }

    return cells;
  }, [visibleMonth, today]);

  const timeSlots = useMemo(() => {
    if (!selectedDate) {
      return TIMES.map((time) => ({ time, status: "disabled" }));
    }

    return TIMES.map((time, index) => {
      const seed = selectedDate.getDate() + index * 3;
      if (seed % 7 === 0) return { time, status: "booked" };
      if (seed % 5 === 0) return { time, status: "unavailable" };
      return { time, status: "available" };
    });
  }, [selectedDate]);

  const onContinue = () => {
    if (!canContinue) return;
    if (step < 3) {
      setStep((prev) => prev + 1);
      return;
    }
    setShowSuccess(true);
  };

  const onBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const goToPrevMonth = () => {
    if (!canGoPrevMonth) return;
    setVisibleMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const goToNextMonth = () => {
    setVisibleMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  const resetBookingForm = () => {
    setStep(1);
    setSessionId("");
    setVisibleMonth(todayMonthStart);
    setSelectedDate(null);
    setSelectedTime("");
    setDetails({ name: "", email: "", phone: "" });
  };

  return (
    <section className="min-h-screen bg-bgColor px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-green-600">
            Book Your Session
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Schedule Your Voice Coaching Session
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-700 sm:text-lg">
            Choose your preferred session type, date, and time to get started on
            your voice transformation journey.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-green-200 bg-white p-4 shadow-sm sm:p-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-center sm:gap-6">
                <StepPill
                  index={1}
                  title="Select Session"
                  isActive={step === 1}
                  isDone={step > 1}
                />
                <StepPill
                  index={2}
                  title="Choose Date & Time"
                  isActive={step === 2}
                  isDone={step > 2}
                />
                <StepPill
                  index={3}
                  title="Your Details"
                  isActive={step === 3}
                  isDone={false}
                />
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-green-500 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            {step === 1 ? (
              <div className="rounded-2xl border border-green-200 bg-white p-4 shadow-sm sm:p-6">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Select Your Session Type
                </h2>
                <p className="mt-2 text-slate-700">
                  Choose the session that best fits your goals
                </p>
                <div className="mt-6 space-y-4">
                  {SESSION_TYPES.map((session) => (
                    <button
                      key={session.id}
                      type="button"
                      onClick={() => setSessionId(session.id)}
                      className={`w-full rounded-2xl border p-4 text-left transition sm:p-6 ${
                        sessionId === session.id
                          ? "border-green-400 bg-green-50/60"
                          : "border-gray-300 hover:border-green-300"
                      }`}
                    >
                      <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:gap-3">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {session.title}
                        </h3>
                        <p className="text-2xl font-bold text-green-600">
                          ${session.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-slate-700">
                        {session.description}
                      </p>
                      <span className="mt-4 inline-flex items-center rounded-lg border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                        <MdOutlineAccessTime className="mr-1" />
                        {session.duration}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-green-200 bg-white p-4 shadow-sm sm:p-6">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Select Date
                  </h2>
                  <p className="mt-2 text-sm text-slate-700">
                    Pick your preferred appointment date
                  </p>

                  <div className="mt-5 rounded-xl border border-green-200 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <button
                        className="rounded p-1 text-xl text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
                        type="button"
                        onClick={goToPrevMonth}
                        disabled={!canGoPrevMonth}
                      >
                        <IoIosArrowBack />
                      </button>
                      <p className="font-semibold text-slate-800">
                        {monthFormatter.format(visibleMonth)}
                      </p>
                      <button
                        className="rounded p-1 text-xl text-slate-700"
                        type="button"
                        onClick={goToNextMonth}
                      >
                        <IoIosArrowForward />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center text-xs text-slate-500">
                      {WEEK_DAYS.map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>

                    <div className="mt-2 grid grid-cols-7 gap-1.5 sm:gap-2">
                      {calendarDays.map((cell) => {
                        if (cell.type === "empty") {
                          return <div key={cell.key} className="h-8 sm:h-9" />;
                        }

                        const isSelected =
                          selectedDate &&
                          cell.date.toDateString() === selectedDate.toDateString();

                        return (
                          <button
                            key={cell.key}
                            type="button"
                            disabled={cell.disabled}
                            onClick={() => {
                              setSelectedDate(cell.date);
                              setSelectedTime("");
                            }}
                            className={`h-8 rounded-md text-xs sm:h-9 sm:text-sm ${
                              cell.disabled
                                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                                : isSelected
                                  ? "bg-green-500 text-white"
                                  : "text-slate-700 hover:bg-green-50"
                            }`}
                          >
                            {cell.day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-slate-600">
                    Sundays and past dates are unavailable.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-200 bg-white p-4 shadow-sm sm:p-6">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Select Time
                  </h2>
                  <p className="mt-2 text-sm text-slate-700">
                    {selectedDate
                      ? `Available slots for ${fullDateFormatter.format(selectedDate)}`
                      : "Pick a date to see available slots"}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1"><span className="inline-flex size-2 rounded-full bg-green-500" /> Available</span>
                    <span className="text-gray-400 inline-flex items-center gap-1">
                    <span className="inline-flex size-2 rounded-full bg-gray-400" />
                      Unavailable
                      </span>
                    <span className="text-red-300 inline-flex items-center gap-1">
                      <span className="inline-flex size-2 rounded-full bg-red-300" />
                      Booked
                      </span>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTime === slot.time;
                      const isDisabled = slot.status !== "available";
                      return (
                        <button
                          key={slot.time}
                          type="button"
                          disabled={isDisabled}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`rounded-lg border px-3 py-2 text-sm font-medium ${
                            isSelected
                              ? "border-green-500 bg-green-500 text-white"
                              : slot.status === "booked"
                                ? "cursor-not-allowed border-red-200 bg-red-50 text-red-400"
                                : slot.status === "unavailable"
                                  ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                                  : "border-gray-300 text-slate-700 hover:border-green-400 hover:bg-green-50"
                          }`}
                        >
                          {slot.time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="rounded-2xl border border-green-200 bg-white p-4 shadow-sm sm:p-6">
                <div className="mb-2 flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Your Details
                  </h2>
                </div>
                <p className="text-sm text-slate-700">
                  Enter your details to complete booking.
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <input
                    className="rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-500"
                    placeholder="Full Name"
                    value={details.name}
                    onChange={(e) =>
                      setDetails((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <input
                    type="email"
                    className="rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-500"
                    placeholder="Email Address"
                    value={details.email}
                    onChange={(e) =>
                      setDetails((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                  <input
                    type="tel"
                    className="rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-500 sm:col-span-2"
                    placeholder="Phone Number"
                    value={details.phone}
                    onChange={(e) =>
                      setDetails((prev) => ({ ...prev, phone: e.target.value }))
                    }
                  />
                </div>
              </div>
            ) : null}

            <div className="flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onBack}
                disabled={step === 1}
                className="w-full rounded-lg border border-gray-300 bg-white px-6 py-2.5 font-semibold text-slate-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                Back
              </button>
              <button
                type="button"
                onClick={onContinue}
                disabled={!canContinue}
                className={`w-full rounded-lg px-8 py-2.5 font-semibold text-white transition sm:w-auto ${
                  canContinue
                    ? "bg-green-500 hover:bg-green-600 opacity-100"
                    : "cursor-not-allowed bg-green-500 bg-opacity-45"
                }`}
              >
                {step === 3 ? "Finish" : "Continue"}
              </button>
            </div>
          </div>

          <BookingSummary
            selectedSession={selectedSession}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />
        </div>
      </div>

      {showSuccess ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl sm:p-7">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
              <FaCheck />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              Booking Successful
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Your session request has been submitted successfully. A confirmation
              email will be sent shortly.
            </p>
            <button
              type="button"
              className="mt-6 rounded-lg bg-green-500 px-6 py-2.5 font-semibold text-white hover:bg-green-600"
              onClick={() => {
                setShowSuccess(false);
                resetBookingForm();
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default BookSession;
