import React from "react";

import "./css/social-media.css";

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <div className="social-media-container">
        <div className="social-media-content">
          <div className="social-media-facebook-container">
            <div className="social-media-text-container">
              Like The Bristol Suspensions on Facebook
            </div>
          </div>
          <div className="social-media-instagram-container">
            <div className="social-media-text-container">
              Follow @brisuspensions on Instagram
            </div>
          </div>
        </div>
        <div className="social-media-content">
          <div className="social-media-facebook-container">
            <div className="frame_container_item">
              <iframe
                className="facebook_frame"
                src={
                  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthebristolsuspensions%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=566597080766840"
                }
                width={500}
                height={500}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
          <div className="social-media-instagram-container">
            <iframe
              width="320"
              height="440"
              src="http://instagram.com/brisuspensions/embed"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
