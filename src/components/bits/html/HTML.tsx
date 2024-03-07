import { Template } from "tinacms";

type Props = {
  body?: string;
};

function HTML(props: Props) {
  const { body = "" } = props;
  return <div dangerouslySetInnerHTML={{ __html: body }} />;
}

export const html: Template = {
  name: "html",
  label: "HTML",
  fields: [
    {
      name: "body",
      label: "Body",
      type: "string",
      ui: { component: "textarea" },
    },
  ],
};

export default HTML;
