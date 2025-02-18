import React from "react";

export default function SongQuotes() {
  return (
    //  Song and Quotes Section Starts
    <div class="container-fluid songs_container" id="for_u">
      <h1 class="songs_header">
        <img src="img/music-notes.png" width="50px" alt="" />
        Songs for you
        <img src="img/music-notes.png" width="50px" alt="" />
      </h1>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 song">
          <div class="imgBx">
            <img
              class="song-img"
              src="img/kiss me.jpg"
              width="250px"
              height="323.52px"
              alt=""
            />
          </div>

          <audio controls>
            <source src="songs/Ed Sheeran- Kiss Me.mp3" type="audio/mp3" />
            <label>Ed Sheeran - Kiss Me</label>
            Your browser does not support the audio element.
          </audio>
        </div>

        <div class="col-lg-4 col-md-6 col-12 song">
          <div class="imgBx">
            <img
              class="song-img"
              src="img/all_of_me.png"
              width="250px"
              alt=""
            />
          </div>

          <audio controls>
            <source src="songs/John Legend - All of Me.mp3" type="audio/mp3" />
            <label>John Legend - All of Me</label>
            Your browser does not support the audio element.
          </audio>
        </div>

        <div class="col-lg-4 col-md-6 col-12 song">
          <div class="imgBx">
            <img
              class="song-img"
              src="img/westlife.jpg"
              width="250px"
              height="323.52px"
              alt=""
            />
          </div>

          <audio controls>
            <source
              src="songs/Westlife - When You Tell Me That You Love Me.mp3"
              type="audio/mp3"
            />
            <label>Westlife - When You Tell Me That You Love Me</label>
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>

      <div class="container-fluid quotes_container">
        <div class="row">
          <div class="col-lg-4 col-md-12 quotes_box">
            <p>
              <img
                src="img/left-quotes-sign.png"
                width="30px"
                style={{ opacity: 0.8 }}
                alt=""
              />
              <h2>Complete puzzles</h2>
              <p>
                Although there's difficulties and inconvienes, we complete each
                other with love and compassion.
              </p>
              <img
                src="img/right-quotes-symbol.png"
                width="30px"
                style={{ opacity: 0.8 }}
                alt=""
              />
            </p>
          </div>

          <div class="col-lg-4 col-md-12 col-12 quotes_box">
            <p>
              <img
                src="img/left-quotes-sign.png"
                width="30px"
                style={{ opacity: 0.8 }}
                alt=""
              />
              <h2>Unicorn power</h2>
              <p>No one is you and that's your super power.</p>
              <img
                src="img/right-quotes-symbol.png"
                width="30px"
                style={{ opacity: 0.8 }}
                alt=""
              />
            </p>
          </div>

          <div class="col-lg-4 col-md-12 col-12 quotes_box">
            <p>
              <img
                src="img/left-quotes-sign.png"
                width="30px"
                style={{ opacity: 0.8 }}
                alt=""
              />
              <h2>Research and Development</h2>
              <p>
                Understanding you seems to be complicated but it's a lovely
                simple riddle.
              </p>
              <img
                src="img/right-quotes-symbol.png"
                width="30px"
                style={{ opacity: 0.8 }}
                alt=""
              />
            </p>
          </div>

          <div class="col-lg-4 col-md-12 col-12 quotes_box">
            <p>
              <img
                src="img/left-quotes-sign.png"
                width="30px"
                style={{ opacity: 0.8 }}
                alt=""
              />
              <h2>My Second Half</h2>
              <p>
                The more I know you, the more I trust you with from the bottom
                of my heart
              </p>
              <img
                src="img/right-quotes-symbol.png"
                width="30px"
                style={{ opacity: 0.8 }}
                alt=""
              />
            </p>
          </div>

          <div class="col-lg-4 col-md-12 col-12 quotes_box">
            <p>
              <img
                src="img/left-quotes-sign.png"
                width="30px"
                style={{ opacity: 0.8 }}
                alt=""
              />
              <h2>Award Winner</h2>
              <p>
                Best Boyfriend Award goes to Coco MTK! Yayy!!
                <br />
                Thank you for your gentleness, love, kindness and care. Coco is
                a superman for baby.
              </p>
              <img
                src="img/right-quotes-symbol.png"
                width="30px"
                style={{ opacity: 0.8 }}
                alt=""
              />
            </p>
          </div>

          <div class="col-lg-4 col-md-12 col-12 quotes_box">
            <p>
              <img
                src="img/left-quotes-sign.png"
                width="30px"
                style={{ opacity: 0.8 }}
                alt=""
              />
              <h2>Hamburger Motivation</h2>
              <p>
                Success = a thing that can give you a hamburger everyday.
                <br />
                (If you want to eat burger everyday, you must achieve your goals
              </p>
              <img
                src="img/right-quotes-symbol.png"
                width="30px"
                style={{ opacity: 0.8 }}
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
    //    Song and Quotes Section Ends
  );
}
