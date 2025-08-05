function Footer() {
  return (
    <footer className="sm-1000:h-full flex h-[440px] w-full flex-col items-center justify-between bg-black text-white">
      {/* Container for content */}
      <div className="sm-1200:px-10 flex w-full max-w-[1170px] flex-wrap justify-between space-x-4">
        {/* <div class="  flex justify-between  px-4"> */}

        {/* Exclusive Section */}
        <div className="mt-20 w-[217px]">
          <h3 className="text-font-4xl-700 mb-6 break-words font-inter">
            Exclusive
          </h3>
          <p className="text-font-2xl-500 mb-6 break-words">Subscribe</p>
          <p className="mb-4 break-words text-font-lg-400">
            Get 10% off your first order
          </p>
          <div className="relative h-12 w-[217px] rounded-[4px] border-[1.5px] border-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="ml-4 mt-3 w-36 bg-black text-color-text-1 outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 transform rounded-full px-2 py-1 text-black">
              <img src="/src/assets/SendMail.png" alt="Right Arrow" />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 w-[175px] text-font-lg-400">
          <h3 className="text-font-2xl-500 mb-6 break-words">Support</h3>
          <p className="mb-4 break-words">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="mb-4 break-words">exclusive@gmail.com</p>
          <p className="break-words">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="mt-20 w-[123px] text-font-lg-400">
          <h3 className="text-font-2xl-500 mb-6 break-words">Account</h3>
          <ul className="">
            <li className="mb-4 break-words">My Account</li>
            <li className="mb-4 break-words">Login / Register</li>
            <li className="mb-4 break-words">Cart</li>
            <li className="mb-4 break-words">Wishlist</li>
            <li className="break-words">Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="mt-20 w-[109px] text-font-lg-400">
          <h3 className="text-font-2xl-500 mb-6 break-words">Quick Link</h3>
          <ul className="">
            <li className="mb-4 break-words">Privacy Policy</li>
            <li className="mb-4 break-words">Terms Of Use</li>
            <li className="mb-4 break-words">FAQ</li>
            <li className="break-words">Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="mt-20 w-[198px]">
          <h3 className="text-font-2xl-500 mb-6 break-words">Download App</h3>
          <p className="text-font-sm-500 break-words text-color-star-gray">
            Save $3 with App New User Only
          </p>
          <div className="mt-4 flex space-x-4">
            <img
              src="/src/assets/DownloadAppPhoto/Qrcode.png"
              alt="QR Code"
              className="h-[76px] w-[76px]"
            />
            <div className="space-y-2">
              <img
                src="/src/assets/DownloadAppPhoto/GooglePlay.png"
                alt="Google Play"
                className="w-[104px]"
              />
              <img
                src="/src/assets/DownloadAppPhoto/AppStore.png"
                alt="App Store"
                className="w-[104px]"
              />
            </div>
          </div>
          <div className="mt-6 flex space-x-6">
            <a
              href="https://www.facebook.com/"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook">
                <img
                  src="/src/assets/DownloadAppPhoto/Icon-Facebook.png"
                  alt="App Store"
                  className="w-6"
                />
              </i>
            </a>

            <a href="https://x.com/" className="text-white" target="_blank">
              <i className="fab fa-X">
                <img
                  src="/src/assets/DownloadAppPhoto/Icon-X.png"
                  alt="App Store"
                  className="w-6"
                />
              </i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-white"
              target="_blank"
            >
              <i className="fab fa-instagram">
                <img
                  src="/src/assets/DownloadAppPhoto/icon-instagram.png"
                  alt="App Store"
                  className="w-6"
                />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/"
              className="text-white"
              target="_blank"
            >
              <i className="fab fa-linkedin">
                <img
                  src="/src/assets/DownloadAppPhoto/Icon-Linkedin.png"
                  alt="App Store"
                  className="w-6"
                />
              </i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      {/* <div className="border-gray-700 text-color-primary2 flex h-16 w-full border-t bg-black text-center text-font-lg-400"> */}
      <div className="border-gray-700 text-color-primary2 mt-6 flex h-16 w-full items-center justify-center border-t text-center text-font-lg-400">
        © Copyright 2025 . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
