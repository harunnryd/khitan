"use client";

import Image from "next/image";
import Layout from "@/components/Layout";
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const guests = [
    "Wahyudi (Kakek)",
    "Yuniarti (Nenek)",
    "Rogaya (Nenek)",
    "Muhammad Ichsan (Uwak)",
    "Siti Jahro (Uwak)",
    "Arifin (Om)",
    "Syaiful (Paman)",
  ];

  // Set the end date for the countdown
  const countdownDate = new Date("2023-12-16T00:00:00").getTime();

  // State to store the countdown
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the countdown is over, clear the interval
      if (distance < 0) {
        clearInterval(interval);
      } else {
        // Update the state with the new countdown time
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [countdownDate]);

  const [isCovidModalOpen, setIsCovidModalOpen] = useState(true);

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Ensure Audio is only used in a browser environment
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/test.mp3"); // Replace with the correct path to your audio file
    }
  }, []);

  // Handle audio play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      isMusicPlaying ? audio.play() : audio.pause();
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [isMusicPlaying]);

  const openCovidModal = () => setIsCovidModalOpen(true);
  // Close Covid Modal and start music
  const closeCovidModal = () => {
    setIsCovidModalOpen(false);
    setIsMusicPlaying(true); // Start playing music when the modal is closed
  };

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeCovidModal();
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);

    // Remove event listener on cleanup
    return () => window.removeEventListener("keydown", handleEscape);
  }, []); // Empty array ensures this effect is only run on mount and unmount

  return (
    <Layout>
      <div
        className="relative bg-bluesea min-h-screen items-center justify-center p-4 lg:p-8"
        id="home"
      >
        {/* Lantern images */}
        {/* <div className="flex flex-row"> */}
        <div className="absolute top-0 left-0 mt-1 sm:mt-2 ml-8 sm:ml-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Left Lantern"
            width={100} // Set the actual width of your image
            height={75} // Set the actual height of your image
          />
        </div>
        <div className="absolute top-0 right-0 mt-1 sm:mt-2 mr-8 sm:mr-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Right Lantern"
            width={100} // Set the actual width of your image
            height={75} // Set the actual height of your image
          />
        </div>

        {/* Basmallah image with more responsive margin and size */}
        <div className="absolute top-8 xs:top-12 sm:top-20 left-1/2 transform -translate-x-1/2 w-1/3 xs:w-24 sm:w-1/3">
          <Image
            src="/basmallah.png"
            alt="Basmallah"
            width={360} // Replace with actual width
            height={160} // Replace with actual height
          />
          {/* Photo image centered */}
          <div className="flex justify-center mt-2 xs:mt-3 sm:mt-5">
            <Image
              src="/bocil.png"
              alt="Child"
              width={200} // Replace with actual width
              height={200} // Replace with actual height
              className="mask mask-circle"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center content-center">
          {/* Event title and child's name with responsive text sizes */}
          <div className="text-center mb-0 xs:mt-1/4 sm:mt-1/4 z-10">
            <h2 className="text-white text-lg xs:text-sm sm:text-2xl mt-1 xs:mt-2">
              Muhammad Zain Mahardika
            </h2>
            <p className="text-white text-xs xs:text-base sm:text-sm mt-4 xs:mt-5 sm:mt-4">
              Semoga Allah SWT menjadikannya anak sholeh, berbakti kepada orang
              tua dan berguna bagi nusa, bangsa dan negara
            </p>
          </div>
          {/* Modal for Invitation and COVID-19 Safety Protocols */}
          {isCovidModalOpen && (
            <dialog
              id="covid_modal"
              className="modal modal-middle p-8 bg-white/10 rounded-xl shadow-lg border-2 border-bluesea backdrop-blur-lg"
              open
            >
              <div className="modal-box bg-white/80 backdrop-blur-0">
                {/* Invitation Section */}
                <div className="text-center mb-6">
                  <h3 className="font-bold text-lg text-bluesea">
                    Kepada Bpk/Ibu/Saudara/i
                  </h3>
                  <p className="py-2">
                    Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk
                    Berhadir Di Acara Tasyakura Khitan Anak Kami.
                  </p>
                  {/* Child's Photo */}
                  <div className="flex justify-center mt-2 xs:mt-3 sm:mt-5">
                    <Image
                      src="/bocil.png" // Replace with the path to the child's photo
                      alt="Child's Photo"
                      width={200} // Adjust as needed
                      height={200} // Adjust as needed
                      className="mask mask-circle"
                    />
                  </div>
                </div>

                {/* COVID-19 Safety Protocols */}
                <div className="border-t pt-4 mt-4 border-bluesea">
                  <h4 className="font-bold text-md text-bluesea">
                    COVID-19 Safety Protocols
                  </h4>
                  <ul className="list-disc pl-5 mt-2 text-sm">
                    <li>
                      Hand sanitizing stations are available throughout the
                      venue.
                    </li>
                    <li>Masks are required for all guests and staff.</li>
                    <li>Physical distancing measures are in place.</li>
                    <li>Temperature checks upon entry.</li>
                    <li>
                      Regular cleaning and disinfection of high-touch surfaces.
                    </li>
                  </ul>
                </div>

                {/* Close Button */}
                <div className="modal-action mt-4">
                  <button
                    className="btn bg-bluesea text-white hover:bg-bluesea-dark"
                    onClick={closeCovidModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </dialog>
          )}
          {/* Countdown Timer */}
          <div className="text-white text-center p-4 lg:p-8 mt-20 lg:mt-32 z-10">
            <h3 className="text-2xl lg:text-2xl font-bold mb-6 mt-4 bg-yellow-300 backdrop-blur border-4 outline-double">
              Countdown acara
            </h3>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral-50 rounded-box border-8 border-l-darkblue-200 text-neutral-content">
                <span className="countdown font-mono text-2xl">
                  <span
                    style={{ "--value": countdown.days } as React.CSSProperties}
                  ></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral-50 rounded-box border-8 border-l-darkblue-200 text-neutral-content">
                <span className="countdown font-mono text-2xl">
                  <span
                    style={
                      { "--value": countdown.hours } as React.CSSProperties
                    }
                  ></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral-50 rounded-box border-8 border-l-darkblue-200 text-neutral-content">
                <span className="countdown font-mono text-2xl">
                  <span
                    style={
                      { "--value": countdown.minutes } as React.CSSProperties
                    }
                  ></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral-50 rounded-box border-8 border-l-darkblue-200 text-neutral-content">
                <span className="countdown font-mono text-2xl">
                  <span
                    style={
                      { "--value": countdown.seconds } as React.CSSProperties
                    }
                  ></span>
                </span>
                sec
              </div>
            </div>
          </div>
          {/* Betawi house illustration as background with clouds */}
          <div
            className="absolute bottom-0 w-full h-1/2 xs:h-1/2 sm:h-1/2 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: "url('/bg-1.png')" }}
          ></div>
        </div>
      </div>

      <div
        className="relative bg-bluesea min-h-screen flex flex-col items-center justify-center p-4 lg:p-8"
        id="invitation"
      >
        {/* Lantern images */}
        <div className="absolute top-0 left-0 mt-1 sm:mt-2 ml-8 sm:ml-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Left Lantern"
            width={100} // Set the actual width of your image
            height={75} // Set the actual height of your image
          />
        </div>
        <div className="absolute top-0 right-0 mt-1 sm:mt-2 mr-8 sm:mr-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Right Lantern"
            width={100} // Set the actual width of your image
            height={75} // Set the actual height of your image
          />
        </div>

        {/* Basmallah image with more responsive margin and size */}
        <div className="absolute top-8 xs:top-12 sm:top-20 left-1/2 transform -translate-x-1/2 w-1/3 xs:w-24 sm:w-1/3">
          <Image
            src="/basmallah.png"
            alt="Basmallah"
            width={360} // Replace with actual width
            height={160} // Replace with actual height
          />
        </div>

        {/* 'Turut Mengundang' Section */}
        <div className="bg-white/10 backdrop-blur rounded-lg shadow-lg p-8 text-center mb-10 mt-2 xs:mt-8 sm:mt-10 md:mt-12 lg:mt-14 z-10 outline-pink-500 outline-offset-2 outline-dashed outline-2">
          <h2 className="text-2xl lg:text-2xl font-bold text-white mb-4">
            Turut mengundang
          </h2>
          <ul className="space-y-4">
            {guests.map((guest, index) => (
              <li
                key={index}
                className=" outline-dashed outline-2 outline-offset-2 outline-pink-500 mt-4 xs:mt-5 sm:mt-4 px-3 xs:px-4 sm:px-6 py-1 xs:py-1.5 sm:py-2 bg-yellow-400/90 text-white/90 font-bold shadow-lg z-10 text-xs xs:text-sm sm:text-base"
              >
                {guest}
              </li>
            ))}
          </ul>
        </div>

        {/* Betawi house illustration as background with clouds */}
        <div
          className="absolute bottom-0 w-full h-1/2 xs:h-1/2 sm:h-1/2 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: "url('/bg-1.png')" }}
        ></div>
      </div>

      <div
        className="relative bg-bluesea min-h-screen items-center justify-center p-4 lg:p-8"
        id="contact"
      >
        {/* Lantern images */}
        {/* <div className="flex flex-row"> */}
        <div className="absolute top-0 left-0 mt-1 sm:mt-2 ml-8 sm:ml-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Left Lantern"
            width={100} // Set the actual width of your image
            height={75} // Set the actual height of your image
          />
        </div>
        <div className="absolute top-0 right-0 mt-1 sm:mt-2 mr-8 sm:mr-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Right Lantern"
            width={100} // Set the actual width of your image
            height={75} // Set the actual height of your image
          />
        </div>

        {/* Basmallah image with more responsive margin and size */}
        <div className="absolute top-8 xs:top-12 sm:top-20 left-1/2 transform -translate-x-1/2 w-1/3 xs:w-24 sm:w-1/3">
          <Image
            src="/basmallah.png"
            alt="Basmallah"
            width={360} // Replace with actual width
            height={160} // Replace with actual height
          />
          {/* Photo image centered */}
          <div className="flex justify-center mt-2 xs:mt-3 sm:mt-5">
            <Image
              src="/bocil.png"
              alt="Child"
              width={200} // Replace with actual width
              height={200} // Replace with actual height
              className="mask mask-circle"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center content-center">
          {/* Event title and child's name with responsive text sizes */}
          <div className="text-left mb-0 xs:mt-2/4 sm:mt-2/4 z-10 font-bold grid grid-cols-1 p-8 mt-4 bg-white/80 backdrop-blur rounded-lg shadow-lg">
            <h2 className="font-bold text-black/70 text-lg xs:text-sm sm:text-2xl mt-1 xs:mt-2">
              Assalamualaikum wr. wb.
            </h2>
            <p className="indent-4 text-justify font-bold text-black/70 text-xs xs:text-base sm:text-sm mt-4 xs:mt-5 sm:mt-4">
              Dengan memohon rahmat dan ridho Allah Subhanahu wa Taala, insya
              Allah kami akan menyelenggarakan acara tasyakuran khitanan anak
              kami.
            </p>
            <h3 className="font-bold text-black/70 text-lg xs:text-lg sm:text-lg mt-4 xs:mt-5 sm:mt-4 underline decoration-sky-500">
              Muhammad Zain Mahardika
            </h3>
            <h3 className="font-bold text-black/70 text-xs xs:xs sm:text-sm mt-4 xs:mt-5 sm:mt-4">
              Putra dari{" "}
              <a className="underline decoration-indigo-500">
                Sandhyka Khairul Faqih
              </a>{" "}
              & <a className="underline decoration-pink-500">Maya Andriyani</a>
            </h3>
          </div>

          {/* Betawi house illustration as background with clouds */}
          <div
            className="absolute bottom-0 w-full h-1/2 xs:h-1/2 sm:h-1/2 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: "url('/bg-1.png')" }}
          ></div>
        </div>
      </div>

      <div
        className="relative bg-bluesea min-h-screen flex flex-col items-center justify-center p-4 lg:p-8"
        id="event-details"
      >
        {/* Lantern images */}
        <div className="absolute top-0 left-0 mt-1 sm:mt-2 ml-8 sm:ml-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Left Lantern"
            width={100} // Set the actual width of your image
            height={75} // Set the actual height of your image
          />
        </div>
        <div className="absolute top-0 right-0 mt-1 sm:mt-2 mr-8 sm:mr-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Right Lantern"
            width={100} // Set the actual width of your image
            height={75} // Set the actual height of your image
          />
        </div>
        {/* Basmallah image with more responsive margin and size */}
        <div className="absolute top-8 xs:top-12 sm:top-20 left-1/2 transform -translate-x-1/2 w-1/3 xs:w-24 sm:w-1/3">
          <Image
            src="/basmallah.png"
            alt="Basmallah"
            width={360} // Replace with actual width
            height={160} // Replace with actual height
          />
        </div>
        <div className="rundown-title text-white text-center p-4">
          <h3 className="text-3xl lg:text-2xl font-bold mb-0 mt-4">
            Rundown acara
          </h3>
        </div>
        <div className="relative w-11/12 rounded-lg  p-1 my-8 z-30">
          {/* Timeline vertical line */}
          <div
            className="absolute inset-0 m-auto w-0.5 bg-gray-700 z-0"
            style={{ height: "98%" }}
          ></div>

          {/* Timeline events */}
          <div className="relative flex flex-col space-y-8 my-8">
            {/* Repeat this block for each event in your timeline */}
            {/* Event 1 */}
            <div className="flex justify-between items-center w-full">
              <div className="w-5/12"></div>
              <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">1</h1>
              </div>
              <div className="bg-gray-100 shadow-xl rounded-lg px-4 py-4 w-5/12 outline-dashed outline-2 outline-offset-2 outline-pink-500">
                <h3 className="font-bold text-gray-800 text-sm">
                  10:00 - 11:00
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900">
                  Pembukaan
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="flex justify-between items-center w-full flex-row-reverse">
              <div className="w-5/12"></div>
              <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div className="bg-gray-900 shadow-xl rounded-lg px-4 py-4 w-5/12 outline-dashed outline-2 outline-offset-2 outline-pink-500">
                <h3 className="font-bold text-white text-sm">11:00 - 13:00</h3>
                <p className="text-sm leading-snug tracking-wide text-white">
                  Pembacaan ayat suci Al-Quran
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="flex justify-between items-center w-full">
              <div className="w-5/12"></div>
              <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">3</h1>
              </div>
              <div className="bg-gray-100 shadow-xl rounded-lg px-4 py-4 w-5/12 outline-dashed outline-2 outline-offset-2 outline-pink-500">
                <h3 className="font-bold text-gray-800 text-sm">
                  13:00 - 14:00
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-800">
                  Sambutan dari pemilik acara atau wali yang berkhitan
                </p>
              </div>
            </div>

            {/* Event 4 */}
            <div className="flex justify-between items-center w-full flex-row-reverse">
              <div className="w-5/12"></div>
              <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
              </div>
              <div className="bg-gray-900 shadow-xl rounded-lg px-4 py-4 w-5/12 outline-dashed outline-2 outline-offset-2 outline-pink-500">
                <h3 className="font-bold text-white text-sm">14:00 - 21:00</h3>
                <p className="text-sm leading-snug tracking-wide text-white">
                  Hiburan Organ Tunggal
                </p>
              </div>
            </div>

            {/* Add more events as needed... */}
          </div>
        </div>
        {/* Adjusted bottom padding for cloud images */}
        <div
          className="absolute bottom-0 w-full h-1/2 xs:h-1/2 sm:h-1/2 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: "url('/bg-1.png')" }}
        ></div>
      </div>

      <div
        className="relative bg-bluesea min-h-screen flex flex-col items-center justify-center p-4 lg:p-8"
        id="location"
      >
        {/* Lantern images */}
        <div className="absolute top-0 left-0 mt-1 sm:mt-2 ml-8 sm:ml-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Left Lantern"
            width={100} // Set the actual width of your image
            height={75} // Set the actual height of your image
          />
        </div>
        <div className="absolute top-0 right-0 mt-1 sm:mt-2 mr-8 sm:mr-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Right Lantern"
            width={100} // Set the actual width of your image
            height={75} // Set the actual height of your image
          />
        </div>
        {/* Basmallah image with more responsive margin and size */}
        <div className="absolute top-8 xs:top-12 sm:top-20 left-1/2 transform -translate-x-1/2 w-1/3 xs:w-24 sm:w-1/3">
          <Image
            src="/basmallah.png"
            alt="Basmallah"
            width={360} // Replace with actual width
            height={160} // Replace with actual height
          />
        </div>
        {/* Buatkan gmaps dan lokasi serta QR gmaps*/}
        <div className="text-center my-8 z-20 bg-white/10 backdrop-blur rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Peta Lokasi</h2>
          <p className="mb-4">
            Anda dapat menuju lokasi acara kami dengan bantuan peta dibawah ini.
            Atau klik tombol di bawah ini
          </p>
          <a
            href="https://www.google.com/maps/place/Jl.+Pembangunan+III+Dalam+No.22,+RT.16%2FRW.7,+Petojo+Utara,+Kecamatan+Gambir,+Kota+Jakarta+Pusat,+Daerah+Khusus+Ibukota+Jakarta+10130/@-6.1627834,106.8149455,17z/data=!4m6!3m5!1s0x2e69f6765f93a521:0x4b3848079173b063!8m2!3d-6.1627834!4d106.8149455!16s%2Fg%2F11qnr0_x4z?source=lnms"
            target="_blank"
            className="mb-4 inline-block bg-yellow-400 text-white font-bold py-2 px-4 rounded"
            rel="noopener noreferrer"
          >
            Buka Di Google Maps
          </a>
          <div
            className="iframe-container"
            style={{
              position: "relative",
              overflow: "hidden",
              paddingTop: "56.25%",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                border: "0",
              }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?q=jln+pembangunan+lll+dalam+no+22b+Rt+15/01+kelurahan+petojo+utara+kecamatan+gambir+jakarta+pusat+10130+&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
        </div>
        {/* Adjusted bottom padding for cloud images */}
        <div
          className="absolute bottom-0 w-full h-1/2 xs:h-1/2 sm:h-1/2 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: "url('/bg-1.png')" }}
        ></div>
      </div>

      <div className="bottom-navbar fixed bottom-0 left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between bg-bluesea xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-4/12 z-50 rounded-3xl">
        {/* Icon for the Home Section */}
        <a
          className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
          href="#home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>

          <span>Home</span>
        </a>

        {/* Icon for the Invitation Section */}
        <a
          className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
          href="#invitation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 8l8 5 8-5v2l-8 5-8-5V8z"
            />
          </svg>
          <span>Invitation</span>
        </a>

        {/* Icon for the Event Details Section */}
        <a
          className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
          href="#event-details"
        >
          <div className="absolute bottom-5 p-3 rounded-full border-4 border-white bg-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V7h14v12H5z"
              />
            </svg>
          </div>
          <span>Details</span>
        </a>

        {/* Icon for the Location Section */}
        <a
          className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
          href="#location"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9s-1.12 2.5-2.5 2.5z"
            />
          </svg>

          <span>Location</span>
        </a>

        {/* Icon for the Contact Section */}
        <a
          className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
          href="#contact"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>

          <span>Contact</span>
        </a>
      </div>

      <label className="swap fixed top-0 right-0 p-4 z-10">
        <input
          type="checkbox"
          onChange={() => setIsMusicPlaying(!isMusicPlaying)}
        />

        {/* Icons for on/off states */}
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          {/* Icon when music is playing */}
          <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
        </svg>
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          {/* Icon when music is paused */}
          <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
        </svg>
      </label>
    </Layout>
  );
}
