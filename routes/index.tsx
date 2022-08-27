/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { aspectRatio } from "@twind/aspect-ratio";
import { formatCurrency } from "@/utils/data.ts";
import { graphql } from "@/utils/shopify.ts";
import { Footer } from "@/components/Footer.tsx";
import { HeadElement } from "@/components/HeadElement.tsx";
import { Header } from "@/components/Header.tsx";
import IconCart from "@/components/IconCart.tsx";
import { List, Product } from "../utils/types.ts";

const q = `{
  products(first: 10) {
    nodes {
      id
      handle
      title
      featuredImage {
        url(transform: {preferredContentType: WEBP, maxWidth:400, maxHeight:400})
        altText
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
}`;

interface Data {
  products: List<Product>;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const data = await graphql<Data>(q);
    return ctx.render(data);
  },
};

export default function Home(ctx: PageProps<Data>) {
  const { data, url } = ctx;
  const products = data.products.nodes;
  return (
    <div style="min-height: 100vh; background-color: #1f1f1f; color: white;">
      <HeadElement
        description="MainlineMusic Store"
        image={"https://images.squarespace-cdn.com/content/v1/5876c469bebafbb7789d15a3/1610846625882-RVHUH7SV0BWY0WMIKBZM/Sugaray+rayford+Logo+White.png?format=1000w"}
        title="SUGARAY RAYFORD Store"
        url={url}
      />
      <Header />
      <div
        class={tw`w-11/12 max-w-5xl mx-auto mt-28`}
        aria-labelledby="information-heading"
      >
        <h2 id="information-heading" class={tw`sr-only`}>
          Product List
        </h2>
        <div
          class={tw`grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10`}
        >
          {products.map((product) => <ProductCard product={product} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ProductCard(props: { product: Product }) {
  const { product } = props;
  return (
    <a key={product.id} href={`/products/${product.handle}`} class={tw`group`}>
      <div
        class={tw`${
          aspectRatio(1, 1)
        } w-full rounded-xl overflow-hidden border-2 border-gray-600 transition-all duration-500 relative`}      >
        {product.featuredImage && (
          <img
            src={product.featuredImage.url}
            alt={product.featuredImage.altText}
            width="400"
            height="400"
            class={tw`w-full h-full object-center object-cover absolute block`}

          />
        )}
        <div
          class={tw`w-full h-full flex items-center justify-center bg-[rgba(83,45,46,0.8)] opacity-0 group-hover:opacity-100 transition-all duration-500`}
        >
          <IconCart size={30} />
        </div>
      </div>
      <div class={tw`flex items-center justify-between mt-3`}>
        <h3 class={tw`text-lg font-medium relative`} style="color: white">
          {product.title}
          <span
            class={tw`h-[3px] w-0 group-hover:!w-full absolute bottom-[-2px] left-0 transition-all duration-400`} style="color: white"
          />
        </h3>
        <strong class={tw`text-lg font-bold text-white`}>
          {formatCurrency(product.priceRange.minVariantPrice)}
        </strong>
      </div>
    </a>
  );
}
