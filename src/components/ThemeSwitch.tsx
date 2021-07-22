import { Tooltip, IconButton, makeStyles } from "@material-ui/core";
import { BrightnessHigh, Brightness2 } from "@material-ui/icons";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1)
    },
}));

const ThemeSwitch = (props: any) => {
    const classes = useStyles();
    const [t,] = useTranslation();
    const { theme, toggleTheme } = props;
    const themeTooltipLabel = useMemo(
        () => (theme ? t('theme.light') : t('theme.dark')),
        [theme, t]
    );

    return (
        <Tooltip title={themeTooltipLabel} aria-label={themeTooltipLabel} arrow>
            <IconButton
                classes={classes}
                onClick={() => {
                    toggleTheme();
                }}
            >
                {theme ? <BrightnessHigh /> : <Brightness2 />}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeSwitch;
