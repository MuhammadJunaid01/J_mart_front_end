import { setDate } from "date-fns";
import React, { useEffect, useState } from "react";

const useHooks = () => {
  const [open, setOpen] = useState(true);
  const [date, setDate] = useState("");

  const check = () => {
    setOpen((open) => !open);
    console.log("open", open);
  };

  return {
    check,
    open,
    setOpen,
    setDate,
    date,
  };
};

export default useHooks;
