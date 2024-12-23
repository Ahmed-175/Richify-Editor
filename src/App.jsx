import editor from "../editor.json";
import React from "react";

const App = () => {
  const renderElement = (data, index) => {
    const { type, content, attributes } = data;

    switch (type) {
      case "h1":
      case "h2":
      case "h3":
      case "p":
        return React.createElement(
          type,
          {
            key: data.id || index, 
            style: attributes?.style,
          },
          content
        );

      case "img":
        return React.createElement(type, {
          key: data.id || index,
          src: attributes?.src,
          alt: attributes?.alt,
        });

      case "a":
        return React.createElement(
          type,
          {
            key: data.id || index,
            href: attributes?.href,
          },
          content
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {editor.map((data, index) => (
        <React.Fragment key={data.id || index}>
          {renderElement(data, index)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;
