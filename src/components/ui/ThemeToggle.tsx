import { useLang } from "@/hooks/useLang";
import { useTheme } from "@/hooks/useTheme";
import { IconButton } from "./IconButton";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLang();
  const isDark = theme === "dark";

  return (
    <IconButton
      onClick={toggle}
      aria-label={isDark ? t.ui.themeToLight : t.ui.themeToDark}
      className="group overflow-hidden"
    >
      <span className="transition-transform duration-500 group-hover:rotate-90">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isDark ? (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M20 12h2M2 12h2M18.4 5.6l-1.4 1.4M7 17l-1.4 1.4M18.4 18.4 17 17M7 7 5.6 5.6" />
            </>
          ) : (
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          )}
        </svg>
      </span>
    </IconButton>
  );
}
