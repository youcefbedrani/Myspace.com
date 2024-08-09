import React, { useEffect } from "react";
import $ from "jquery";
import "./AboutStyle.scss";

function About() {
    useEffect(() => {
        (function($) {
          var s,
          spanizeLetters = {
            settings: {
              letters: $('.js-spanize'),
            },
            init: function() {
              s = this.settings;
              this.bindEvents();
            },
            bindEvents: function(){
              s.letters.html(function (i, el) {
                var spanizer = $.trim(el).split("");
                return '<span>' + spanizer.join('</span><span>') + '</span>';
              });
            },
          };
          spanizeLetters.init();
        })(jQuery);
      }, []); // Empty dependency array means this effect runs once after initial render

    return (
      <main className="w-full h-80 flex justify-center items-center min-h-screen">
        <section className="mast">
          <header className="mast__header">
            <h1 className="text-black">Who is Mohammed Adel ?</h1>
            <h1 className="mast__title js-spanize">Incoming Transmission</h1>
            <hr className="sep" />
            <p className="mast__text js-spanize">
              This is a story, all about how, My life got twisted upside down. So
              I'd like to tell a story, just sit right there. And I'll tell you
              how I became the prince of Bel Air.
            </p>
          </header>
        </section>
        'Source Sans Pro', Helvetica, Arial, sans-serif
      </main>
    );
  }
  
export default About;