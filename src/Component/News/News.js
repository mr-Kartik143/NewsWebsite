import React, { Children } from "react";

export default function News() {


  // inislization of API key
  let Api =
    "https://newsapi.org/v2/everything?q=apple&from=2023-03-12&to=2023-03-12&sortBy=popularity&apiKey=73900edf355043a6b40cbbdadea3f987";

  // fetch api
  async function getnews() {
    if (window.location.href == "http://localhost:3000/") {
      Api =
        "https://newsapi.org/v2/everything?q=apple&from=2023-03-12&to=2023-03-12&sortBy=popularity&apiKey=73900edf355043a6b40cbbdadea3f987";
    } else if (window.location.href == "http://localhost:3000/business") {
      Api =
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=73900edf355043a6b40cbbdadea3f987";
    } else if (window.location.href == "http://localhost:3000/entertainment") {
      Api =
        "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=73900edf355043a6b40cbbdadea3f987";
    } else if (window.location.href == "http://localhost:3000/technology") {
      Api =
        "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=73900edf355043a6b40cbbdadea3f987";
    } else if (window.location.href == "http://localhost:3000/science") {
      Api =
        "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=73900edf355043a6b40cbbdadea3f987";
    } else if (window.location.href == "http://localhost:3000/sports") {
      Api =
        "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=73900edf355043a6b40cbbdadea3f987";
    } else if (window.location.href == "http://localhost:3000/health") {
      Api =
        "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=73900edf355043a6b40cbbdadea3f987";
    } else {
      Api =
        "https://newsapi.org/v2/everything?q=apple&from=2023-03-12&to=2023-03-12&sortBy=popularity&apiKey=73900edf355043a6b40cbbdadea3f987";
    }
    let response = await fetch(`${Api}`);
    let data = await response.json();
    // let news1 = data?.articles?.[2]?.title;
    renderdata(data);
  }
  getnews();

  // render news
  function renderdata(data) {
    for (let i = 1; i <= 33; i++) {
      // img not exits
      if (`${data?.articles?.[i]?.urlToImage}` == "null") {
        const img = document.querySelector(".img" + i);
        img.src =
          "https://thumbs.dreamstime.com/b/live-breaking-news-television-broadcast-globe-gradient-blue-background-illustration-panorama-185818606.jpg";
      } else {
        const img = document.querySelector(".img" + i);
        img.src = `${data?.articles?.[i]?.urlToImage}`;
      }

      // news not exits
      if (`${data?.articles?.[i]?.title}` == "undefined") {
        console.log("card" + i);
      } else {
        const title = document.querySelector(".title" + i);
        let titleval = `${data?.articles?.[i]?.title}`;
        title.textContent = titleval.slice(0, 90);
        const dec = document.querySelector(".dec" + i);
        let decval = `${data?.articles?.[i]?.description}`;
        dec.textContent = decval.slice(0, 160) + " . . .";
        const date1 = document.querySelector(".date" + i);
        date1.textContent = `${data?.articles?.[i]?.publishedAt}`;
        // img not exits
      }
    }
  }
  // redirect to news page
  async function gonews(index) {
    let response = await fetch(`${Api}`);
    let data = await response.json();
    let gourl = data?.articles?.[index]?.url;
    // console.log(gourl)
    window.location.href = `${gourl}`;
  }

  return (
    <div className="wraper w-full  flex justify-center items-center text-white">
      {/* main grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-[90%]">
        {/* box content */}
        <div
          onClick={() => gonews(1)}
          className="card1 flex flex-col justify-start w-full md:col-span-2 grid-cols-2 grid-rows-2 rounded-2xl bg-[#1f1f1f]"
        >
          <p className="Font-[roboto] pb-5 text-3xl text-[#b1b1ec] px-12 pt-5">
            Top Stories
          </p>
          <div className="flex justify-center flex-col md:flex-row items-center h-full">
            <img
              className="img1 rounded-2xl h-52 mx-6"
              // width={"40rem"}
              // height={"2px"}
              alt="image not avilable"
            />
            <div>
              <p className="title1 text-xl self-start font-[roboto] px-6 pt-8 pb-4 font-semibold"></p>
              <p className="dec1 px-6 py-2 text-lg"></p>
              <p className="date1 self-start px-6 py-3 pb-6 opacity-25"></p>
            </div>
          </div>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(2)}
          className="card2 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img2 rounded-2xl md:h-[14rem]  lg:h-[15rem] w-[100%] h-[14rem] object-cover"
            alt="image not avilable"
          />
          <p className="title2 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec2 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date2 opacity-25  px-4 py-2 pb-6"></p>
        </div>

        {/* box content */}
        <div
          onClick={() => gonews(3)}
          className="card3 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img3 rounded-2xl md:h-[14rem]  lg:h-[15rem] w-[100%] h-[14rem] object-cover"
            alt="image not avilable"
          />
          <p className="title3 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec3 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date3 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(4)}
          className="card4 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img4 rounded-2xl md:h-[14rem]  lg:h-[15rem] w-[100%] h-[14rem] object-cover"
            alt="image not avilable"
          />
          <p className="title4 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec4 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date4 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(5)}
          className="card5 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img5 rounded-2xl md:h-[14rem]  lg:h-[15rem] w-[100%] h-[14rem] object-cover"
            alt="image not avilable"
          />
          <p className="title5 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec5 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date5 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(6)}
          className="card6 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img6 rounded-2xl md:h-[14rem]  lg:h-[15rem] w-[100%] h-[14rem] object-cover"
            alt="image not avilable"
          />
          <p className="title6 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec6 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date6 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(7)}
          className="card7 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img7 rounded-2xl md:h-[14rem]  lg:h-[15rem] w-[100%] h-[14rem] object-cover"
            alt="image not avilable"
          />
          <p className="title7 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec7 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date7 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(8)}
          className="card8rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img8 rounded-2xl md:h-[14rem]  lg:h-[15rem] w-[100%] h-[14rem] object-cover"
            alt="image not avilable"
          />
          <p className="title8 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec8 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date8 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(9)}
          className="card9 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img9 rounded-2xl md:h-[14rem]  lg:h-[15rem] w-[100%] h-[14rem] object-cover"
            alt="image not avilable"
          />
          <p className="title9 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec9 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date9 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(10)}
          className="card10 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img10 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title10 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec10 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date10 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(11)}
          className="card11 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img11 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title11 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec11 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date11 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(12)}
          className="card12 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img12 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title12 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec12 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date12 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(13)}
          className="card13 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img13 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title13 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec13 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date13 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(14)}
          className="card14 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img14 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title14 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec14 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date14 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(15)}
          className="card15 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img15 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title15 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec15 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date15 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(16)}
          className="card16 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img16 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title16 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec16 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date16 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(17)}
          className="card17 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img17 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title17 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec17 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date17 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(18)}
          className="card18 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img18 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title18 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec18 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date18 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(19)}
          className="card19 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img19 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title19 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec19 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date19 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(20)}
          className="card20rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img20 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title20 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec20 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date20 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(21)}
          className="card21rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img21 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title21 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec21 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date21 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(22)}
          className="card22 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img22 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title22 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec22 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date22 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(23)}
          className="card23rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img23 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title23 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec23 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date23 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div onClick={() => gonews(24)} className="24ounded-2xl bg-[#1f1f1f]">
          <img
            className="img24 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title24 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec24 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date24 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(25)}
          className="card25 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img25 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title25 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec25 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date25 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(26)}
          className="card26 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img26 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title26 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec26 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date26 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(27)}
          className="card27 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img27 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title27 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec27 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date27 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(28)}
          className="card28 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img28 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title28 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec28 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date28 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(29)}
          className="card29 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img29 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title29 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec29 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date29 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(30)}
          className="card30 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img30 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title30 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec30 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date30 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(31)}
          className="card31 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img31 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title31 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec31 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date31 opacity-25  px-4 py-2 pb-6"></p>
        </div>
        {/* box content */}
        <div
          onClick={() => gonews(32)}
          className="card32 rounded-2xl bg-[#1f1f1f]"
        >
          <img
            className="img32 rounded-2x md:h-[14rem]  lg:h-[15rem]l w-[100%] h-145rem] object-cover"
            alt="image not avilable"
          />
          <p className="title32 text-md font-[roboto] font-semibold px-4 py-4 h-20"></p>
          <p className="dec32 text-lg px-4 py-4 h-[11rem] overflow-hidden"></p>
          <p className="date32 opacity-25  px-4 py-2 pb-6"></p>
        </div>
      </div>
    </div>
  );
}
