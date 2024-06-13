"use client";
import "./style.scss";
import cx from "classnames";

export default function Toggle({
  rounded = false,
  isToggled = false,
  onToggle = () => {},
}) {
  const sliderCX = cx("slider", {
    rounded: rounded,
  });

  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className={sliderCX} />
    </label>
  );
}
