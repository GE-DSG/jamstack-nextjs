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
        <div className="buttonwrapper">
          {actions &&
            actions.map(function (action, index) {
              let element = null;
              if (action.type === "button") {
                element = (
                <a href={action.href} target={action.target}> 
                  <button key={index}
                    className={`button-primary relative transition duration-150 ease-out text-white transition duration-500 ease-in-out 
                      transform bg-${theme.color}-500 hover:bg-${
                      theme.color
                    }-600 bg-gradient-to-r from-${theme.color}-400 to-${
                      theme.color
                    }-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
                    style={{
                      textShadow: "0 2px 5px rgba(0,0,0,0.1)",
                      boxShadow: `0 0.5rem 3rem 0px rgba(var(--color-rgb-${theme.color}-600),0.35)`,
                    }}
                  > {action.label}
                                  
                  </button></a>
                );
              }

              if (action.type === "secondarybutton") {
                element = (
                <a href={action.href} target={action.target}> 
                  <button key={index}
                    className={`button-secondary relative transition duration-150 ease-out text-white transition duration-500 ease-in-out 
                     transform bg-${theme.color}-500 hover:bg-${
                      theme.color
                    }-600 bg-gradient-to-r from-${theme.color}-400 to-${
                      theme.color
                    }-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
                    style={{
                      textShadow: "0 2px 5px rgba(0,0,0,0.1)",
                      boxShadow: `0 0.5rem 3rem 0px rgba(var(--color-rgb-${theme.color}-600),0.35)`,
                    }}
                  > {action.label}
                                  
                  </button></a>
                );
              }

              if (action.type === "link" || action.type === "linkExternal") {
                element = (
                  <a
                    key={index}
                    href= {action.href}
                    target={action.target}
                    className={`inline-flex items-center font-semibold mx-3 my-2 text-lg transition duration-150 ease-out text-${theme.color}-600 dark:text-${theme.color}-400 hover:text-${theme.color}-400 dark:hover:text-${theme.color}-500`}
                    style={{
                      textShadow: `0 3px 7px rgba(var(--color-rgb-${theme.color}-400),0.2)`,
                    }}
                  >
                    {action.label}
                    {/* {action.icon && (
                      <BiRightArrowAlt
                        className={`ml-0 mr-0 w-6 h-6 text-${theme.color}-500`}
                      />
                    )} */}
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
    href:"https://www.ge.com/",
    target:"_blank",
    component: "group-list",
    itemProps: (item) => ({
      label: item.label,
    }),
    defaultItem: () => ({
      label: "Action Label",
      type: "button",     
    }),
    
    fields: [
      {
        label: "Label",
        name: "label",
        component: "text",       
      },
      {
        name: "href",
        label: "Hyperlink URL",
        component: "text",
      },
      {
        name: "target",
        label: "Page Target ",
        component: "text",
      },   
      {
        label: "Type",
        name: "type",
        component: "radio-group",
        variant: "button",
        options: [
          { label: "Primary Button", value: "button" },
          { label: "Secondary Button", value: "secondarybutton" },
          { label: "link", value: "link" },
        ],
      },
      // {
      //   label: "Icon",
      //   name: "icon",
      //   component: "toggle",
      // },
    ],
  },
];
