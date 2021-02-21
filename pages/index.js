import { Client } from "../prismicKits";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";
import Head from "next/head";

const Page = (props) => <>
  <Head>
    <title>{props.data.meta_title}</title>
    <meta name="description" content={props.data.meta_description}/>
  </Head>
  <SliceZone {...props} resolver={resolver} />;
</>

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: () => "home",
});

export default Page;
