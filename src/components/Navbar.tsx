import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ThemeContextType } from "../types/types.tasks";
import { Button, IconWrapper, Tooltip, Icon } from "./UI";

export const Navbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="box-border p-1  w-full border-b  border-slate-500/20 ">
      <Button className="group " Type="icon" onClick={() => changeTheme()}>
        <IconWrapper>
          <Tooltip>{theme}</Tooltip>
          {theme === "Dark" ? (
            <Icon className="w-6 h-6" name="darkIcon" />
          ) : (
            <Icon className="w-6 h-6" name="lightIcon" />
          )}
        </IconWrapper>{" "}
      </Button>
    </div>
  );
};
