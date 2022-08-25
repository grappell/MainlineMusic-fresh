/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Cart from "../islands/Cart.tsx";

export function Header() {
  return (
    <header
      class={tw`h-[110px] sm:!h-[144px] w-full bg-cover bg-no-repeat relative`}
      style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7hno5IXTKTOK3gMlH1WRAptrhjRtF5KOuW1tQ7ubwoPNZvoFim4mEerxq_tHzUBDjl0&usqp=CAU')",
        
      }}
    >
      <div class={`rainfall ${tw`w-full h-full absolute`}`} />
      <nav
        class={tw`w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative`}
      >
        {/* <a href="/">
          <img
            src="/logo.svg"
            alt="Deno Logo"
            class={tw`h-14 w-14`}
          />
        </a> */}
        <h1>
          {/* <img
            src="/text_logo.svg"
            alt="Deno Merch"
            class={tw`h-6`}
            width="130"
            height="24"
          /> */}
          <b style="font-size: 40px">Mainline Music</b>
        </h1>
        <Cart />
      </nav>
    </header>
  );
}
