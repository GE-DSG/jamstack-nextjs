import * as React from "react";
import { ThemeContext } from "./theme";
import { InlineGroup } from "react-tinacms-inline";
import { BiRightArrowAlt } from "react-icons/bi";

export const Actions = ({ actions }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className="w-full">
      <InlineGroup
        name=""
        focusRing={{ offset: 10 }}
        insetControls={true}
        fields={ACTION_FIELDS}
      >
        <div className="flex flex-wrap items-center -mx-3 -my-2">
          {actions &&
            actions.map(function (action, index) {
              let element = null;
              if (action.type === "button") {
                element = (
                <a href={action.href}>  <button
                    key={index}
                    className={`z-10 relative flex items-center px-7 py-3 mx-3 my-2 font-semibold text-lg transition duration-150 ease-out text-white transition duration-500 ease-in-out ${
                      theme.button.style === "rounded" && `rounded-lg`
                    } ${
                      theme.button.style === "round" && `rounded-full`
                    } transform bg-${theme.color}-500 hover:bg-${
                      theme.color
                    }-600 bg-gradient-to-r from-${theme.color}-400 to-${
                      theme.color
                    }-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
                    style={{
                      textShadow: "0 2px 5px rgba(0,0,0,0.1)",
                      boxShadow: `0 0.5rem 3rem 0px rgba(var(--color-rgb-${theme.color}-600),0.35)`,
                    }}
                  > {action.label}
                    {action.icon && (
                      <BiRightArrowAlt
                        className={`ml-1 -mr-1 w-6 h-6 text-${theme.color}-50`}
                      />
                    )}
                   
                  </button></a>
                );
              }
              if (action.type === "link" || action.type === "linkExternal") {
                element = (
                  <a
                    key={index}
                    href= {action.href}
                    className={`inline-flex items-center font-semibold mx-3 my-2 text-lg transition duration-150 ease-out text-${theme.color}-600 dark:text-${theme.color}-400 hover:text-${theme.color}-400 dark:hover:text-${theme.color}-500`}
                    style={{
                      textShadow: `0 3px 7px rgba(var(--color-rgb-${theme.color}-400),0.2)`,
                    }}
                  >
                    {action.label}
                    {action.icon && (
                      <BiRightArrowAlt
                        className={`ml-0 mr-0 w-6 h-6 text-${theme.color}-500`}
                      />
                    )}
                  </a>
                );
              }
              return element;
            })}
        </div>
      </InlineGroup>
    </div>
  );
};

export const ACTION_FIELDS = [
  {
    label: "Actions",
    name: "actions",
    href:"https://www.aajtak.in/",
    component: "group-list",
    itemProps: (item) => ({
      label: item.label,
    }),
    defaultItem: () => ({
      label: "Action Label",
      type: "button",
      link:"#",
    }),
    
    fields: [
      {
        name: "href",
        label: "Hyperlink URL",
        component: "text",
      },
      {
        label: "Label",
        name: "label",
        component: "text",
        link:"#"
      },
      {
        label: "Type",
        name: "type",
        component: "radio-group",
        variant: "button",
        options: [
          { label: "Button", value: "button" },
          { label: "Link", value: "link" },
        ],
      },
      {
        label: "Icon",
        name: "icon",
        component: "toggle",
      },
    ],
  },
];
