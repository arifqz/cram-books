"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedPiece, setSelectedPiece] = useState<string>("[insert piece]");

  const pieces = [
    "pawn",
    "castle",
    "knight",
    "bishop",
    "queen",
    "king",
  ];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (pieces.includes(hash)) {
      setSelectedPiece(hash);
    }
  }, []);

  const updatePiece = (piece: string) => {
    setSelectedPiece(piece);
    window.location.hash = piece;
  };

  const pieceDescriptions: Record<string, string> = {
    pawn: "The Pawn, commonly known as the Foot Soldier, is the most numerous piece on the chessboard. It is visually depicted as a simple, rounded sphere atop a slender neck and a flared base, representing the helmeted head of an unmounted infantryman. Unlike any other piece, the Pawn moves forward one square at a time, but it captures diagonally and has the unique ability to move two squares on its initial turn. Despite being the least powerful individual unit, its ability to act as a defensive shield and its potential to promote into a more powerful piece upon reaching the final rank makes it the foundational soul of chess strategy.",
    castle: "The Rook, commonly known as the Castle, is the heavy artillery of the chessboard. It is visually depicted as a fortified stone tower with a flared base and crenellated battlements featuring the notched teeth used by archers for cover. Representing an immovable defensive bastion, the piece moves in uninterrupted straight lines either horizontally or vertically across any number of vacant squares. While it cannot move diagonally or jump over obstacles, its unlimited linear range makes it a crushing force that dominates open files and ranks.",
    knight: "The Knight, commonly known as the Horse, is the most unique piece on the chessboard. It is visually depicted as the bust of a stallion, often featuring a carved mane and a proud, arched neck to represent a cavalry mount. Unlike any other piece, the Knight moves in an \"L\" shape, leaping over occupied squares to land two spaces in one cardinal direction and one space perpendicular to it. Because its movement is the only one that can jump over obstacles, it is an essential tactical tool for navigating crowded boards and launching unpredictable attacks.",
    bishop: "The Bishop is the diagonal specialist of the chessboard, representing a high-ranking ecclesiastical official or counselor. It is visually depicted as a tall, slender pillar topped with a mitre, which is a ceremonial headdress featuring a deep, vertical cleft or notch. The name \"Bishop\" reflects the piece's status within the medieval social hierarchy, aligning the game with the power structures of the church and state. The piece moves in uninterrupted diagonal lines across any number of vacant squares, provided its path is not blocked. Because it is forever restricted to the color of the square on which it began the game, it serves as a long-range tactical tool for controlling specific color complexes.",
    queen: "The Queen is the most powerful piece on the chessboard, representing the sovereign’s most influential advisor and protector. It is visually depicted as a tall, elegant pillar topped with a coronet or a series of small spheres to distinguish it from the King’s cross. The name Queen reflects the piece's evolution into a versatile and dominant force within the medieval social hierarchy. The Queen combines the movements of the Rook and the Bishop, traveling in uninterrupted straight lines horizontally, vertically, or diagonally across any number of vacant squares. This unlimited range in all directions makes it the most dangerous offensive weapon on the board.",
    king: "The King is the most important piece on the chessboard, representing the monarch and the ultimate objective of the game. It is visually depicted as the tallest piece on the board, featuring a stout, regal pillar topped with a cross or a crown to signify supreme authority. The name King is derived from the Old Persian Shah, reflecting the piece’s status as the heart of the kingdom. The King moves one square in any direction, horizontally, vertically, or diagonally, making it a slow but versatile unit. While it has limited range, its safety is the primary concern of every move, as the game ends immediately once the King is trapped in checkmate.",
  };

  const dontsImages = [
    {
      src: "/donts/1.png",
      text: (
        <>
          <span className="block mb-2 font-bold text-lg">The Issue:</span>
          <span className="block mb-4 text-base">
            Do not feature two primary versions of the{" "}
            <span className="bg-black text-white px-1">{selectedPiece}</span> in a
            symmetrical or mirrored layout.
          </span>
          <span className="block mb-2 font-bold text-lg">The Reason:</span>
          <span className="block text-base">
            This project is about the singular essence of the piece. Doubling the
            subject creates a &quot;pair&quot; dynamic that conflicts with the
            &quot;Oneness&quot; concept and weakens the individual impact of the
            icon.
          </span>
        </>
      ),
    },
    {
      src: "/donts/2.png",
      text: (
        <>
          <span className="block mb-2 font-bold text-lg">The Issue:</span>
          <span className="block mb-4 text-base">
            Do not crop the piece so tightly that it bleeds off the edges or loses
            its recognizable silhouette.
          </span>
          <span className="block mb-2 font-bold text-lg">The Reason:</span>
          <span className="block text-base">
            Each poster needs to function as a clear &quot;tile&quot; in a larger
            grid. If the subject is too large, it disrupts the visual breathing
            room (margins) required to make the chessboard pattern work.
          </span>
        </>
      ),
    },
    {
      src: "/donts/3.png",
      text: (
        <>
          <span className="block mb-2 font-bold text-lg">The Issue:</span>
          <span className="block mb-4 text-base">
            Do not create a wallpaper, pattern, or &quot;army&quot; of the{" "}
            <span className="bg-black text-white px-1">{selectedPiece}</span>.
          </span>
          <span className="block mb-2 font-bold text-lg">The Reason:</span>
          <span className="block text-base">
            While you can add smaller &quot;minions&quot; or environmental
            details, the piece must be a singular hero. Repetitive patterns turn
            the illustration into a texture rather than a character, which
            won&apos;t stand out properly when placed in the final chessboard
            layout.
          </span>
        </>
      ),
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen text-black font-sans">
      <main className="w-full px-6 py-14 md:px-12">
        {/* Header Title */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-left mb-2">
                CRAM Books
              </h1>
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-left text-gray-600">
                Chess Poster Project
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 md:text-right">
                Select Your Piece
              </span>
              <div className="grid grid-cols-3 gap-2">
                {pieces.map((piece) => (
                  <button
                    key={piece}
                    onClick={() => updatePiece(piece)}
                    className={`px-3 py-2 border-2 border-black text-sm font-bold uppercase transition-colors
                      ${
                        selectedPiece === piece
                          ? "bg-black text-white"
                          : "bg-white text-black hover:bg-gray-100"
                      }`}
                  >
                    {piece}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Section: Brief */}
        <section className="mb-8 max-w-[90vw]">
          <h2 className="text-3xl font-semibold mb-4 uppercase tracking-wider text-gray-800 border-b-2 border-black pb-0 text-left leading-none w-full">
            Brief
          </h2>
          <p className="text-2xl leading-tight text-gray-800 text-left">
            We are looking for your personal take on the{" "}
            <span className="bg-black text-white px-2 py-1">{selectedPiece}</span>
            . The interpretation is up to you—it can be a character, a
            mechanical construct, an abstract form, or a literal figure. The
            goal is to see how you understand the essence of{" "}
            <span className="bg-black text-white px-2 py-1">{selectedPiece}</span>
          </p>
        </section>

        {/* Section: Your Piece & Template */}
        <section className="mb-8 max-w-[90vw]">
          <div className="bg-black text-white p-8">
            <h2 className="text-3xl font-semibold mb-6 uppercase tracking-wider text-white border-b-2 border-[#f5e6c1] pb-0 text-left leading-none w-full">
              <span className="bg-black text-white px-0 py-1 normal-case">{selectedPiece}</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="text-2xl leading-tight text-white text-left mb-6">
                  {selectedPiece === "[insert piece]" 
                    ? "This is where your creativity takes the lead. Whether you choose to depict a stoic pawn, a regal queen, or a charging knight, let your illustration tell a story. Consider the piece's movement, history, or symbolic meaning in your design."
                    : pieceDescriptions[selectedPiece]
                  }
                </p>
              </div>
              <div className="shrink-0">
                <a 
                  href="/chesstemplate.psd" 
                  download
                  className="inline-block bg-black text-white text-xl font-bold px-8 py-4 uppercase tracking-wide border-2 border-[#f5e6c1] hover:bg-gray-900 transition-colors"
                >
                  Download Template
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Guidelines */}
        <section className="max-w-[90vw]">
          <h2 className="text-3xl font-semibold mb-4 uppercase tracking-wider text-gray-800 border-b-2 border-black pb-0 text-left leading-none w-full">
            Guidelines
          </h2>
          <ul className="space-y-4 text-2xl text-gray-800 text-left list-disc pl-12">
            <li className="leading-tight pl-2">
              <span className="font-bold text-black block mb-2 -ml-2">Oneness:</span>
              To maintain a consistent focal point across the series, your{" "}
              <span className="bg-black text-white px-2 py-1">{selectedPiece}</span>{" "}
              must be the singular subject of the illustration. You may include
              supporting details, &quot;minions,&quot; or accessories to build
              the environment, but the composition should clearly represent one
              dominant entity. Please do not feature two of the same main piece.
            </li>
            <li className="leading-tight pl-2">
              <span className="font-bold text-black block mb-2 -ml-2">
                Background:
              </span>
              To help these pieces sit together in a grid later, please use one of
              these solid backgrounds:
              <div className="mt-4 flex flex-col items-start gap-3">
                <span
                  className="px-2 py-1 text-white flex items-center gap-2"
                  style={{ backgroundColor: "#67B346" }}
                >
                  Kelly Green
                  <button
                    onClick={() => handleCopy("#67B346")}
                    className="hover:underline font-mono bg-black/20 px-1 rounded cursor-pointer"
                    title="Click to copy hex"
                  >
                    #67B346
                  </button>
                  {copied === "#67B346" && (
                    <span className="text-sm font-normal ml-1">Copied!</span>
                  )}
                </span>
                <span
                  className="px-2 py-1 text-black border-2 border-black flex items-center gap-2"
                  style={{ backgroundColor: "#f5e6c1" }}
                >
                  Cream
                  <button
                    onClick={() => handleCopy("#f5e6c1")}
                    className="hover:underline font-mono bg-black/10 px-1 rounded cursor-pointer"
                    title="Click to copy hex"
                  >
                    #f5e6c1
                  </button>
                  {copied === "#f5e6c1" && (
                    <span className="text-sm font-normal ml-1">Copied!</span>
                  )}
                </span>
              </div>
            </li>
            <li className="leading-tight pl-2">
              <span className="font-bold text-black block mb-2 -ml-2">
                Composition:
              </span>{" "}
              We’ve provided a template to make things easy. Just make sure your
              illustration stays within the designated live area; we want to
              keep that nice margin of &quot;breathing room&quot; around the
              edges of the 10inches by 10inches frame.
            </li>
          </ul>
        </section>

        {/* Section: Technical Specs (Risograph) */}
        <section className="max-w-[90vw] mt-8">
          <h2 className="text-3xl font-semibold mb-4 uppercase tracking-wider text-gray-800 border-b-2 border-black pb-0 text-left leading-none w-full">
            Technical Specs (Risograph)
          </h2>
          <p className="text-2xl leading-tight text-gray-800 text-left mb-6">
            Because these will be printed via Risograph, please keep the
            following in mind:
          </p>
          <ul className="space-y-4 text-2xl text-gray-800 text-left list-disc pl-12">
            <li className="leading-tight pl-2">
              <span className="font-bold text-black block mb-2 -ml-2">
                Line Weight:
              </span>
              Avoid extremely fine lines or hyper-detailed textures, as these
              may not translate well or could result in data loss during the
              Riso process.
            </li>
            <li className="leading-tight pl-2">
              <span className="font-bold text-black block mb-2 -ml-2">
                File Setup:
              </span>
              We will be printing layer by layer. Please provide a layered PSD
              file separated by color. If you are familiar with spot color
              separation, feel free to set it up that way.
            </li>
            <li className="leading-tight pl-2">
              <span className="font-bold text-black block mb-2 -ml-2">
                Dimensions:
              </span>
              10inches by 10inches (3000px by 3000px at 300dpi) (as per the provided template).
            </li>
          </ul>
        </section>

        {/* Section: FAQ */}
        <section className="max-w-[90vw] mt-8">
          <h2 className="text-3xl font-semibold mb-4 uppercase tracking-wider text-gray-800 border-b-2 border-black pb-0 text-left leading-none w-full">
            FAQ
          </h2>
          <ul className="space-y-4 text-2xl text-gray-800 text-left list-disc pl-12">
            <li className="leading-tight pl-2">
              <span className="font-bold text-black block mb-2 -ml-2">
                Can I submit more than one design?
              </span>
              Yes! We encourage you to submit multiple interpretations if you have them.
            </li>
            <li className="leading-tight pl-2">
              <span className="font-bold text-black block mb-2 -ml-2">
                What if I don&apos;t play chess?
              </span>
              No problem! You don&apos;t need to be a grandmaster to appreciate the aesthetics of the pieces.
            </li>
          </ul>
        </section>

        {/* Section: DONTS */}
        <section className="max-w-[90vw] mt-8">
          <h2 className="text-3xl font-semibold mb-4 uppercase tracking-wider text-gray-800 border-b-2 border-black pb-0 text-left leading-none w-full">
            Things to Avoid
          </h2>
          <p className="text-2xl leading-tight text-gray-800 text-left mb-6">
            Here are a few things to avoid to ensure the best possible result:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dontsImages.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="relative aspect-square border-2 border-gray-200">
                  <Image
                    src={item.src}
                    alt={`Don't example ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center border-2 border-white shadow-sm z-10">
                    <span className="text-white font-bold text-4xl leading-none">✕</span>
                  </div>
                </div>
                <div className="text-gray-700">{item.text}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
