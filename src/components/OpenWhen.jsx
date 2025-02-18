import React from "react";

export default function OpenWhen() {
  return (
    //   Open When section starts
    <div class="container-fluid open_when" id="open_when">
      <h1>Open When</h1>

      <div class="row">
        {/* Envelope and Popup 1 starts */}
        <div class="col-lg-4 col-md-4 col-12  box" id="e1">
          <div class="mail_wrapper">
            <div class="mail">
              <div class="cover"></div>
              <div class="letter">
                <h1>Need a laugh Darling?</h1>
              </div>
            </div>
            <div class="message-header">
              <p>
                Open When You Need a laugh
                <br />
                (hover the envelope first)
              </p>
            </div>
          </div>

          <div class="btn_read">
            <a
              href="#e1"
              class="btn btn-outline-primary open"
              onclick="show('popup1')"
            >
              Open Now
            </a>
          </div>
        </div>
        <div class="popup" id="popup1">
          <img src="img/us7_sq.jpeg" />
          <h2>Joke joke</h2>
          <p>
            A couple are on a date at a fancy restaurant. The woman tells the
            man to say something to her that will get her heart racing. He
            replies, "I forgot my wallet."
            <br />
            What's your happiest place?
            <br />
            Other people: Disneyland
            <br />
            Khant Su: In coco chest UwU
          </p>
          <a
            class="btn btn-outline-primary"
            href="#e1"
            onclick="hide('popup1')"
          >
            Close
          </a>
        </div>
        {/* Envelope and Popup 1 Ends */}

        {/* Envelope and Popup 2 starts */}
        <span class="col box" id="e2">
          <div class="mail_wrapper">
            <div class="mail">
              <div class="cover"></div>
              <div class="letter">
                <h1>Are You Missing Me Coco?</h1>
              </div>
            </div>

            <div class="message-header">
              <p>
                Open When You're Missing Me
                <br />
                (hover the envelope first)
              </p>
            </div>
          </div>

          <div class="btn_read">
            <a
              href="#e2"
              class="btn btn-outline-primary open"
              onclick="show('popup2')"
            >
              Open Now
            </a>
          </div>
        </span>
        <div class="popup" id="popup2">
          <img src="img/us15_sq.jpeg" />
          <h2>Always by your side</h2>
          <p>
            These days, all the situation leads me missing you more and more
            darling. I always feels like a baby whenever I'm in your arms and
            don't want to stop it. I miss you so bad and need you so much too.
            If you're missing me, you can talk to me whenever you want to. I'll
            be always there for you.
          </p>
          <a
            class="btn btn-outline-primary"
            href="#e2"
            class="close"
            onclick="hide('popup2')"
          >
            Close
          </a>
        </div>
        {/* Envelope and Popup 2 Ends */}

        {/* Envelope and Popup 3 starts */}
        <span class="col box" id="e3">
          <div class="mail_wrapper">
            <div class="mail">
              <div class="cover"></div>
              <div class="letter">
                <h1>Have A Great Day</h1>
              </div>
            </div>

            <div class="message-header">
              <p>Open When You Have Great Day(hover the envelope first)</p>
            </div>
          </div>

          <div class="btn_read">
            <a
              href="#e3"
              class="btn btn-outline-primary open"
              onclick="show('popup3')"
            >
              Open Now
            </a>
          </div>
        </span>
        <div class="popup" id="popup3">
          <img src="img/us1_sq.jpeg" />
          <h2>Great Day for you</h2>
          <p>
            I know you're happy and satisfied! It's really great that you
            achieved a day well in your week. Keep Fighting! All the good things
            are waiting for you. Love you..xoxo (kiss for your blessed day)
          </p>
          <a
            class="btn btn-outline-primary"
            href="#e3"
            onclick="hide('popup3')"
          >
            Close
          </a>
        </div>
        {/* Envelope and Popup 3 Ends */}
      </div>

      <div class="row">
        {/* Envelope and Popup 4 starts */}
        <span class="col box" id="e4">
          <div class="mail_wrapper">
            <div class="mail mail-row2">
              <div class="cover cover-row2"></div>
              <div class="letter">
                <h1>Are you feeling down?</h1>
              </div>
            </div>
            <div class="message-header">
              <p>
                Open When You feel down
                <br />
                (hover the envelope first)
              </p>
            </div>
          </div>

          <div class="btn_read">
            <a
              href="#e4"
              class="btn btn-outline-primary open"
              onclick="show('popup4')"
            >
              Open Now
            </a>
          </div>
        </span>
        <div class="popup" id="popup4">
          <img src="img/us6_sq.jpg" />
          <h2>Keep it up! You can do it.</h2>
          <p>
            Take a deep breath and calm down. Everyone can't get something
            easily by their own. There're always lots of steps on your way.
            Convert your challenges to your power! Remember to get enough rest
            nw Coco's health is baby's first priority. (Love You Darling)
          </p>
          <a
            class="btn btn-outline-primary"
            href="#e4"
            onclick="hide('popup4')"
          >
            Close
          </a>
        </div>
        {/* Envelope and Popup 4 Ends */}

        {/* Envelope and Popup 5 starts */}
        <span class="col box" id="e5">
          <div class="mail_wrapper">
            <div class="mail mail-row2">
              <div class="cover cover-row2"></div>
              <div class="letter">
                <h1>Are you ready?</h1>
              </div>
            </div>

            <div class="message-header">
              <p>
                Open Now
                <br />
                (hover the envelope first)
              </p>
            </div>
          </div>

          <div class="btn_read">
            <a
              href="#e5"
              class="btn btn-outline-primary open"
              onclick="show('popup5')"
            >
              open now
            </a>
          </div>
        </span>
        <div class="popup" id="popup5">
          <img src="img/us10_sq.jpg" />
          <h2>Happy Valentine's Day</h2>
          <p>
            Happy Valentine’s Day to my handsome guy. I am proud to be yours and
            wanna say "Thank You" for being my dear! I wish I could spend this
            whole day with you and have some lovely moments with you. However,
            our hearts are connected with an invisible string: my love are
            always with you and yours are with me.
          </p>
          <a
            class="btn btn-outline-primary"
            href="#e5"
            onclick="hide('popup5')"
          >
            Close
          </a>
        </div>
        {/* Envelope and Popup 5 Ends */}

        {/* Envelope and Popup 6 starts */}
        <span class="col box" id="e6">
          <div class="mail_wrapper">
            <div class="mail mail-row2">
              <div class="cover cover-row2"></div>
              <div class="letter">
                <h1>Wanna buy something?</h1>
              </div>
            </div>
            <div class="message-header">
              <p>
                Open When You Want to buy smth
                <br />
                (hover the envelope first)
              </p>
            </div>
          </div>

          <div class="btn_read">
            <a
              href="#e6"
              class="btn btn-outline-primary open"
              onclick="show('popup6')"
            >
              Open Now
            </a>
          </div>
        </span>
        <div class="popup" id="popup6">
          <img src="img/us14.jpg" />
          <h2>Think it again</h2>
          <p>
            Baby suggest Coco to follow 48-Hour-Rule.Think it again before you
            buy something and make it clear whether it's your need or want. Try
            saving money for our future darling. Hahaha.. Now, it's time for
            your valentine's gift. I put 60k mmk, half price of SSD, in the
            envelope. Enjoy it! Love You Darling
          </p>
          <a
            class="btn btn-outline-primary"
            href="#e6"
            onclick="hide('popup6')"
          >
            Close
          </a>
        </div>
        {/* Envelope and Popup 6 Ends */}
      </div>

      <div class="row">
        {/* Envelope and Popup 7 starts */}
        <span class="col box" id="e7">
          <div class="mail_wrapper">
            <div class="mail mail-row3">
              <div class="cover cover-row3"></div>
              <div class="letter">
                <h1>XOXO</h1>
              </div>
            </div>
            <div class="message-header">
              <p>
                Open When You Need My Kiss
                <br />
                (hover the envelope first)
              </p>
            </div>
          </div>

          <div class="btn_read">
            <a
              href="#e7"
              class="btn btn-outline-primary open"
              onclick="show('popup7')"
            >
              Open Now
            </a>
          </div>
        </span>
        <div class="popup" id="popup7">
          <img src="img/us4.jpg" />
          <h2>Need kiss?</h2>
          <p>
            Sending millions of virtual kisses for you
            <br />
            <span>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-heart"></i>
            </span>
          </p>
          <a
            class="btn btn-outline-primary"
            href="#e7"
            onclick="hide('popup7')"
          >
            Close
          </a>
        </div>
        {/* Envelope and Popup 7 Ends */}

        {/* Envelope and Popup 8 starts */}
        <span class="col box" id="e8">
          <div class="mail_wrapper">
            <div class="mail mail-row3">
              <div class="cover cover-row3"></div>
              <div class="letter">
                <h1>Are You Feeling Angry?</h1>
              </div>
            </div>
            <div class="message-header">
              <p>
                Open When You're Angry <br />
                (hover the envelope first)
              </p>
            </div>
          </div>

          <div class="btn_read">
            <a
              href="#e8"
              class="btn btn-outline-primary open"
              onclick="show('popup8')"
            >
              Open Now
            </a>
          </div>
        </span>
        <div class="popup" id="popup8">
          <img src="img/heart-circle.png" />
          <h2>Everything Will Be Alright</h2>
          <p>
            Are you mad at me coco? Is everything feeling uncomfortable around
            you? Baby recommend you to drink a full cup of water first, take a
            shower and do something that can relax your body and mind. Lots of
            love
          </p>
          <a
            class="btn btn-outline-primary"
            href="#e8"
            onclick="hide('popup8')"
          >
            Close
          </a>
        </div>
        {/* Envelope and Popup 8 Ends */}

        {/* Envelope and Popup 9 starts */}
        <span class="col box" id="e9">
          <div class="mail_wrapper">
            <div class="mail mail-row3">
              <div class="cover cover-row3"></div>
              <div class="letter">
                <h1>Wishing You A Very Special Day</h1>
              </div>
            </div>
            <div class="message-header">
              <p>
                Open On Your Birthday
                <br />
                (hover the envelope first)
              </p>
            </div>
          </div>

          <div class="btn_read">
            <a
              href="#e9"
              class="btn btn-outline-primary open"
              onclick="show('popup9')"
            >
              Open Now
            </a>
          </div>
        </span>
        <div class="container-fluid popup" id="popup9">
          <img src="img/us1_sq.jpeg" />
          <h2>Happy Birthday Darling!</h2>
          <p>
            Happy 20th Birthday pr Darling! Meeting you was the most wonderful
            thing that has happened to me in life and I am so lucky I can call
            you mine.
          </p>
          <a
            class="btn btn-outline-primary"
            href="#e9"
            onclick="hide('popup9')"
          >
            Close
          </a>
        </div>
        {/* Envelope and Popup 9 Ends */}
      </div>
      {/* Open When section ends */}
    </div>
  );
}
