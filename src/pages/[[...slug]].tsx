import {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { client } from "../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { Page } from "../components/layouts/page/Page";
import Menu from "../components/sections/menu/Menu";

export default function Slug(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = useTina(props);

  return (
    <>
      <Menu {...data?.menu} />
      <Page {...data?.page} />
    </>
  );
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  //!TODO
  return {
    paths: [],
    fallback: false,
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
