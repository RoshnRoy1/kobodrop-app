import Klarna from "../assets/logo-wall/klarna.png";
import Stripe from "../assets/logo-wall/stripe.png";
import Paypal from "../assets/logo-wall/paypal.png";
import Bedc from "../assets/logo-wall/bedc.png";
import Mastercard from "../assets/logo-wall/mastercard.png";
import Mtn from "../assets/logo-wall/mtn.png";
import Airtel from "../assets/logo-wall/airtel.png";
import Payoneer from "../assets/logo-wall/payoneer.png";
import Visa from "../assets/logo-wall/visa.png";
import Mobile from "../assets/logo-wall/mobile.png";
import Ikeja from "../assets/logo-wall/ikeja.png";
import Dstv from "../assets/logo-wall/dstv.png";

import LogoWall from "../common/LogoWall";

function Partners() {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Transact seamlessy with..
        </h2>
        <p>
          Connect your other accounts to Kobodrop seamlessly. Kobodrop supports
          200+
          <br />
          integrations with other payment platforms like stripe, paypal,
          payoneer and others
        </p>
      </article>
      <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={Klarna}
          src2={Stripe}
          src3={Paypal}
          alt1="Klarna logo"
          alt2="Stripe logo"
          alt3="Paypal logo"
        />
        <LogoWall
          src1={Mobile}
          src2={Airtel}
          src3={Dstv}
          alt1="Mobile logo"
          alt2="Airtel logo"
          alt3="Dstv logo"
        />
      </div>
      <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={Bedc}
          src2={Mastercard}
          src3={Mtn}
          alt1="Bedc logo"
          alt2="Mastercard logo"
          alt3="Mtn logo"
        />
        <LogoWall
          src1={Payoneer}
          src2={Visa}
          src3={Ikeja}
          alt1="Payoneer logo"
          alt2="Visa logo"
          alt3="Ikeja logo"
        />
      </div>
    </section>
  );
}

export default Partners;
