import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { client } from "../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { Page } from "../components/layouts/page/Page";
import Menu from "../components/sections/menu/Menu";

export default function Slug(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  console.log({ props });
  const { data } = useTina(props);

  return (
    <main>
      <Menu {...data?.menu} />
      <Page {...data?.page} />
    </main>
  );
}

export async function getStaticPaths() {
  const connection = await client.queries.pageConnection();
  const paths = connection.data.pageConnection.edges?.map((page) => {
    return page?.node?.url;
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const url =
    "/" +
    (
      (Array.isArray(context.params?.slug)
        ? context.params?.slug
        : [context.params?.slug]) ?? [""]
    ).join("/");

  const connection = await client.queries.pageConnection();
  const page = connection.data.pageConnection.edges?.find(
    (edge) => edge?.node?.url === url
  );

  const id = page?.node?._sys.relativePath;

  if (!id) {
    return { notFound: true };
  }

  const props = await client.queries.pageAndMenu({ relativePath: id });

  return {
    props,
  };
}
