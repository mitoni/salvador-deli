import { Template } from "tinacms";

interface Props {
  src?: string;
  body?: string;
  async?: boolean;
}

function Script(props: Props) {
  const { src = "", body = "", async = false } = props;

  return (
    <script
      async={async}
      src={src}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}

export const script: Template = {
  name: "script",
  label: "Script",
  fields: [
    {
      name: "src",
      label: "Source",
      type: "string",
      ui: { component: "textarea" },
    },
    {
      name: "body",
      label: "Body",
      type: "string",
      ui: { component: "textarea" },
    },
    {
      name: "async",
      label: "Async",
      type: "boolean",
    },
  ],
};

export default Script;
