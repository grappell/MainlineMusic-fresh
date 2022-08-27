/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Cart from "../islands/Cart.tsx";

export function Header() {
  return (
    <header
      class={tw`h-[110px] sm:!h-[144px] w-full bg-cover bg-no-repeat relative`}
      // style={{
      //   backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7hno5IXTKTOK3gMlH1WRAptrhjRtF5KOuW1tQ7ubwoPNZvoFim4mEerxq_tHzUBDjl0&usqp=CAU')",
      // }}
      style="background-color: #532d2e"
    >
      <link rel="stylesheet" href="/app.css" />
      <div class={`rainfall ${tw`w-full h-full absolute`}`} />
      <nav
        class={tw`w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative`}
      >
        <a href="/" class="logo" draggable="false">
          <img id="logo"
            src="https://images.squarespace-cdn.com/content/v1/5876c469bebafbb7789d15a3/1610846625882-RVHUH7SV0BWY0WMIKBZM/Sugaray+rayford+Logo+White.png?format=1000w"
            alt="Deno Logo"
            class={tw`h-14`}
          />
        </a>
        <h1>
          {/* <img
            src="/text_logo.svg"
            alt="Deno Merch"
            class={tw`h-6`}
            width="130"
            height="24"
          /> */}
          <b style="font-size: 32px;">SUGARAY RAYFORD</b>
        </h1>
        <Cart />
      </nav>
    </header>
  );
}
