import { useState } from "react";

export default function RightNav() {
  const [viewMoreClicked, setViewMoreClicked] = useState(false);

  const links = [
    {
      title: "Zmineh",
      link:
        "https://zamineh.art/artists/105/%DB%8C%D8%A7%D8%B3%D9%85%D9%86-%D9%86%D9%88%D8%B0%D8%B1%DB%8C"
    },
    {
      title: "honaronline",
      link:
        "http://www.honaronline.ir/%D8%A8%D8%AE%D8%B4-%D8%AA%D8%AC%D8%B3%D9%85%DB%8C-4/107760-%D9%87%D9%85%D9%87%D9%85%D9%87-%D8%A7%D8%B2-%D8%B5%D8%AF%D8%A7%D9%87%D8%A7%DB%8C-%D8%AF%D8%B1%D9%88%D9%86-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%A8%DB%8C%D8%B1%D9%88%D9%86-%D8%A2%D9%85%D8%AF%D9%87-%D8%A7%D8%B3%D8%AA-%D8%B1%D9%88%D8%A7%DB%8C%D8%AA-%DB%8C%D8%A7%D8%B3%D9%85%DB%8C%D9%86-%D9%86%D9%88%D8%B0%D8%B1%DB%8C-%D8%A7%D8%B2-%D9%86%D9%85%D8%A7%DB%8C%D8%B4%DA%AF%D8%A7%D9%87-%D8%A2%D8%AB%D8%A7%D8%B1%D8%B4-%D8%AF%D8%B1-%DA%AF%D8%A7%D9%84%D8%B1%DB%8C-%D8%AF%D9%84%DA%AF%D8%B4%D8%A7"
    }
  ];

  const viewMoreLinks = [
    {
      title: "neveshtart",
      link:
        "http://neveshtart.com/fa/%D8%AF%D8%B1-%D8%AC%D8%B1%DB%8C%D8%A7%D9%86/"
    },
    { title: "galleryinfo", link: "https://galleryinfo.ir/Artist/fa/3273" },
    { title: "darz.art", link: "https://darz.art/fa/artists/yasaman-nozari" },
    { title: "mohsen.gallery", link: "https://mohsen.gallery/" }
  ];

  return (
    <div className="right-nav">
      <p className="header">
        CV & INTER- <br /> VIEWS
      </p>
      {links.map((l, index) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          key={l.title}
          href={l.link}
        >
          {l.title}
        </a>
      ))}
      {viewMoreClicked &&
        viewMoreLinks.map((l) => (
          <a target="_blank" rel="noopener noreferrer" href={l.link}>
            {l.title}
          </a>
        ))}
      <button
        className="view-more"
        onClick={() => setViewMoreClicked(!viewMoreClicked)}
      >
        view {viewMoreClicked ? "less" : "more"}
      </button>
      <style jsx>{`

        .right-nav {
            width: 200px;
        }

        .right-nav .header {
          font-size: larger;
          font-family: "Audiowide", cursive;
          margin: 1rem 0;

        }

        .right-nav a {
          display: block;
          color: #6F6F6F;
          text-decoration: none;
        }

        a:visited {
          color: lightgray;
        }
        
        a:hover {
          color: darkgray;
        }
        
        a:active {
          color: blue;
        }

        .view-more {
          cursor: pointer;
        }

        @media only screen and (max-width: 700px) {
          .right-nav .header {
            margin: 0 0 1rem 0;
          }
        }
      

        }
      `}</style>
    </div>
  );
}
