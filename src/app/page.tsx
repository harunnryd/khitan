"use client";

import Image from "next/image";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

export default function Home() {
  const guests = [
    "Roma Irama",
    "Jokowi",
    "Anis Baswedan",
    "Prabowo",
    "Roma Irama",
    "Jokowi",
    "Anis Baswedan",
    "Prabowo",
  ];

  // Set the end date for the countdown
  const countdownDate = new Date("2023-12-31T00:00:00").getTime();

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

  return (
    <Layout>
      <div className="relative bg-darkblue min-h-screen items-center justify-center p-4 lg:p-8">
        {/* Lantern images */}
        <div className="flex flex-row">
          <div className="absolute top-0 left-0 mt-1 sm:mt-2 ml-8 sm:ml-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
            <Image
              src="/lantern.png"
              alt="Left Lantern"
              layout="responsive"
              width={4}
              height={3}
            />
          </div>
          <div className="absolute top-0 right-0 mt-1 sm:mt-2 mr-8 sm:mr-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
            <Image
              src="/lantern.png"
              alt="Right Lantern"
              layout="responsive"
              width={4}
              height={3}
            />
          </div>
          {/* Basmallah image with more responsive margin and size */}
          <div className="absolute top-8 xs:top-12 sm:top-20 left-1/2 transform -translate-x-1/2 w-1/3 xs:w-24 sm:w-1/3">
            <Image
              src="/basmallah.png"
              alt="Basmallah"
              layout="responsive"
              width={9}
              height={4}
            />
            {/* Photo image */}
            <div className="mt-2 xs:mt-3 sm:mt-5">
              <Image
                src="/photo.png"
                alt="Child"
                className="rounded-full border-2 border-yellow-400"
                layout="responsive"
                width={1}
                height={1}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center content-center">
          {/* Event title and child's name with responsive text sizes */}
          <div className="text-center mb-0 xs:mt-1/4 sm:mt-1/4 z-10">
            <h1 className="text-white font-bold text-sm xs:text-2xl sm:text-3xl mt-1 xs:mt-2 sm:mt-4">
              Tasyakuran Khitan
            </h1>
            <h2 className="text-white text-lg xs:text-sm sm:text-2xl mt-1 xs:mt-2">
              Ananda Putra
            </h2>
            <p className="text-white text-xs xs:text-base sm:text-sm mt-1 xs:mt-2">
              Semoga Allah SWT menjadikannya anak sholeh, berbakti kepada orang
              tua dan berguna bagi nusa, bangsa dan negara
            </p>
          </div>
          {/* Date with responsive size */}
          <div className="outline-dashed outline-2 outline-offset-2 outline-pink-500 mt-7 w-2/4 xs:mt-5 sm:mt-4 px-3 xs:px-4 sm:px-6 py-1 xs:py-1.5 sm:py-2 bg-yellow-400 text-blue-900 font-bold shadow-lg z-10 text-xs xs:text-sm sm:text-base text-center">
            12 December 2023
          </div>
          {/* Betawi house illustration as background with clouds */}
          <div
            className="absolute bottom-0 w-full h-1/2 xs:h-1/2 sm:h-1/2 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: "url('/betawi-house.png')" }}
          >
            <div className="absolute bottom-0 left-0 w-1/3 xs:w-1/3 sm:w-1/3">
              <Image
                src="/cloud-left.png"
                alt="Cloud Left"
                layout="responsive"
                width={4}
                height={3}
              />
            </div>
            <div className="absolute bottom-0 right-0 w-1/3 xs:w-1/3 sm:w-1/3">
              <Image
                src="/cloud-right.png"
                alt="Cloud Right"
                layout="responsive"
                width={4}
                height={3}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-darkblue min-h-screen flex flex-col items-center justify-center p-4 lg:p-8">
        {/* Lantern images */}
        <div className="absolute top-0 left-0 mt-1 sm:mt-2 ml-8 sm:ml-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Left Lantern"
            layout="responsive"
            width={4}
            height={3}
          />
        </div>
        <div className="absolute top-0 right-0 mt-1 sm:mt-2 mr-8 sm:mr-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Right Lantern"
            layout="responsive"
            width={4}
            height={3}
          />
        </div>

        {/* Basmallah image with more responsive margin and size */}
        <div className="absolute top-8 xs:top-12 sm:top-20 left-1/2 transform -translate-x-1/2 w-1/3 xs:w-24 sm:w-1/3 z-30">
          <Image
            src="/basmallah.png"
            alt="Basmallah"
            layout="responsive"
            width={9}
            height={4}
          />
        </div>

        {/* Countdown Timer */}
        <div className="text-white text-center p-4 lg:p-8 mt-20 lg:mt-32">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 mt-4">
            Countdown acara
          </h3>
          <div className="flex justify-center space-x-2 rounded-lg outline-dashed outline-2 outline-offset-2 outline-pink-500">
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl font-bold">{countdown.days}</span>
              <span className="text-sm">Hari</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl font-bold">{countdown.hours}</span>
              <span className="text-sm">Jam</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl font-bold">{countdown.minutes}</span>
              <span className="text-sm">Menit</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl font-bold">{countdown.seconds}</span>
              <span className="text-sm">Detik</span>
            </div>
          </div>
        </div>

        {/* 'Turut Mengundang' Section */}
        <div className="bg-white/10 backdrop-blur rounded-lg shadow-lg p-8 text-center mb-10 mt-2 xs:mt-8 sm:mt-10 md:mt-12 lg:mt-14 z-10 outline-pink-500 outline-offset-2 outline-dashed outline-2">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Turut mengundang
          </h2>
          <ul className="space-y-4">
            {guests.map((guest, index) => (
              <li
                key={index}
                className=" outline-dashed outline-2 outline-offset-2 outline-pink-500 mt-4 xs:mt-5 sm:mt-4 px-3 xs:px-4 sm:px-6 py-1 xs:py-1.5 sm:py-2 bg-yellow-400/90 text-white-900 font-bold shadow-lg z-10 text-xs xs:text-sm sm:text-base"
              >
                {guest}
              </li>
            ))}
          </ul>
        </div>

        {/* Betawi house illustration as background with clouds */}
        <div
          className="absolute bottom-0 w-full h-1/2 xs:h-1/2 sm:h-1/2 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: "url('/betawi-house.png')" }}
        >
          {/* Adjusted bottom padding for cloud images */}
          <div className="absolute bottom-0 left-0 w-1/3 xs:w-1/3 sm:w-1/3 pb-10">
            <Image
              src="/cloud-left.png"
              alt="Cloud Left"
              layout="responsive"
              width={4}
              height={3}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 xs:w-1/3 sm:w-1/3 pb-10">
            <Image
              src="/cloud-right.png"
              alt="Cloud Right"
              layout="responsive"
              width={4}
              height={3}
            />
          </div>
        </div>
      </div>

      <div className="relative bg-darkblue min-h-screen flex flex-col items-center justify-center p-4 lg:p-8">
        {/* Lantern images */}
        <div className="absolute top-0 left-0 mt-1 sm:mt-2 ml-8 sm:ml-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Left Lantern"
            layout="responsive"
            width={4}
            height={3}
          />
        </div>
        <div className="absolute top-0 right-0 mt-1 sm:mt-2 mr-8 sm:mr-10 w-1/12 xs:w-1/12 sm:w-1/12 z-30">
          <Image
            src="/lantern.png"
            alt="Right Lantern"
            layout="responsive"
            width={4}
            height={3}
          />
        </div>
        {/* Basmallah image with more responsive margin and size */}
        <div className="absolute top-8 xs:top-12 sm:top-20 left-1/2 transform -translate-x-1/2 w-1/3 xs:w-24 sm:w-1/3">
          <Image
            src="/basmallah.png"
            alt="Basmallah"
            layout="responsive"
            width={9}
            height={4}
          />
          {/* Photo image */}
        </div>
        <div className="rundown-title text-white text-center p-4">
          <h3 className="text-3xl lg:text-4xl font-bold mb-0 mt-4">
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
                  12:00 - 13:00
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900">
                  Makan Makan
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
                <h3 className="font-bold text-white text-sm">13:00 - 14:00</h3>
                <p className="text-sm leading-snug tracking-wide text-white">
                  Acara Selanjutnya
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
                  Acara Selanjutnya
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
                <h3 className="font-bold text-white text-sm">13:00 - 14:00</h3>
                <p className="text-sm leading-snug tracking-wide text-white">
                  Acara Selanjutnya
                </p>
              </div>
            </div>

            {/* Add more events as needed... */}
          </div>
        </div>
        {/* Betawi house illustration as background with clouds */}
        <div
          className="absolute bottom-0 w-full h-1/2 xs:h-1/2 sm:h-1/2 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: "url('/betawi-house.png')" }}
        >
          {/* Adjusted bottom padding for cloud images */}
          <div className="absolute bottom-0 left-0 w-1/3 xs:w-1/3 sm:w-1/3 pb-10">
            <Image
              src="/cloud-left.png"
              alt="Cloud Left"
              layout="responsive"
              width={4}
              height={3}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 xs:w-1/3 sm:w-1/3 pb-10">
            <Image
              src="/cloud-right.png"
              alt="Cloud Right"
              layout="responsive"
              width={4}
              height={3}
            />
          </div>
        </div>
      </div>

      <div className="bottom-navbar fixed bottom-0 left-1/2 transform -translate-x-1/2 inline-flex  mx-auto justify-between bg-darkblue xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-4/12 z-50 rounded-3xl">
        <a
          aria-current="page"
          className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
          href="#"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <span className="sr-only">Home</span>
        </a>
        <a
          className="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
          href="#"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <span className="sr-only">Upload</span>
        <button className="relative inline-flex flex-col items-center text-xs font-medium text-white py-3 px-6 flex-grow">
          <div className="absolute bottom-5 p-3 rounded-full border-4 border-white bg-blue-600">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="sr-only">Chat</span>
        </button>
        <a
          className="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
          href="#"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </a>
        <a
          className="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
          href="#"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Profile</span>
        </a>
      </div>
    </Layout>
  );
}
