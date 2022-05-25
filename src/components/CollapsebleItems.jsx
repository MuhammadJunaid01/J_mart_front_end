import React from "react";
import CollapsableSidebarMenu from "./CollapsableSidebarMenu";

const CollapsebleItems = ({
  TitleIcon,
  IconDown,
  IconUp,
  collapse,
  name,
  collapseSidebar,
  menuItem,
}) => {
  return (
    <div>
      <div
        onClick={collapse}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          color: "#B2B4B5",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ marginTop: "6px" }}>
            <TitleIcon />
          </p>
          <p style={{ marginLeft: "6px" }}>{name}</p>
        </div>
        <p>{collapseSidebar ? <IconDown /> : <IconUp />}</p>
      </div>
      {collapseSidebar && menuItem && (
        <CollapsableSidebarMenu array={menuItem} />
      )}
    </div>
  );
};

export default CollapsebleItems;
