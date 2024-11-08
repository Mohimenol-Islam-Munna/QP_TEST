import { FC, useState, useEffect } from "react";
import { buttonList } from "./buttonList";
import Button from "../../shared/Button";

const MyComponent: FC = (): JSX.Element => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetBtn = document.querySelector(
      "#buttonWrapper button"
    ) as HTMLButtonElement;

    if (targetBtn) {
      targetBtn.style.cssText =
        "background-color: rgb(59,130,246); color: white; cursor: pointer; padding: 2px 10px; border-radius: 5px";

      targetBtn.addEventListener("click", () => {
        setCount((prevCount) => prevCount + 1);
      });

      return () => {
        targetBtn.removeEventListener("click", () => {});
      };
    }
  }, []);



  return (
    <div>
      <h2>
        Hey! You have clicked me {count} {count > 1 ? "times" : "time"}
      </h2>
      <div id="buttonWrapper" className="mt-6 flex flex-wrap">
        {buttonList.map((item) => (
          <Button key={item.id} title={item.title} type={item.type} />
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
